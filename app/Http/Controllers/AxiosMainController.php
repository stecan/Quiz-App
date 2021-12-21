<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\m_user;
use App\Models\t_answer;
use App\Models\t_follower;
use App\Models\t_question;

class AxiosMainController extends Controller
{
    // 手札最大数
    public static $_followerMax = 20;
    // 回答者最大数
    public static $_challengerMax = 3;
    // Auth
    public function Auth(Request $request){
        $myId = $request['emp_no'];
        $myPassword = $request['password'];

        return m_user::where('user_id', '=', $myId)
        ->where('password', '=', $myPassword)
        ->exists();
    }

    // プレイヤー情報取得
    public function getUser(Request $request)
    {
        $myId = $request['my_user_id']; // ログインユーザID

        // ユーザ情報取得
        $player = m_user::where('user_id', '=', $myId)
        ->first();

        return $player;
    }

    // 手札抽選
    public function drawingCard(Request $request)
    {
        $myId = $request['my_user_id']; // ログインユーザID

        // 抽選対象ユーザ情報取得
        $players = m_user::select([
            'id',
            'user_id',
            'user_name',
            'department',
        ])
        ->where('a_kbn', '<>', '0')
        ->where('user_id', '<>', $myId) /* 自分は抽選対象にしない */
        ->get();

        // 抽選
        $result = self::drawing($players, self::$_followerMax);

        // 手札登録
        t_follower::where('user_id', $myId)->delete();
        foreach ($result as $data)
        {
            $item = new t_follower;
            $item->user_id = $myId;
            $item->follower_user_id = $data->user_id;
            $item->save();
        }

        // 結果出力
        return $result;
    }

    // 手札取得
    public function getCard(Request $request)
    {
        $myId = $request['my_user_id']; // ログインユーザID

        // 手札情報取得
        $result = t_follower::join('m_user', function($join) use ($myId) {
            $join->on('t_follower.follower_user_id', '=', 'm_user.user_id')
              ->where('t_follower.user_id', '=', $myId);
        })->select([
            'm_user.user_id as user_id',
            'm_user.user_name as user_name',
            'm_user.department as department',
        ])
        ->get();

        return $result;
    }

    // 問題抽選
    public function drawingQuestion(Request $request)
    {
        // 出題中→出題済 更新
        $questions = t_question::where('q_kbn', '=', '1')->get(); /* 出題中 */
        foreach ($questions as $data)
        {
            $data->q_kbn = '9';
            $data->save();
        }

        // 未出題を抽出
        $questions = t_question::where('q_kbn', '=', '0')->get();

        // セーフティコード
        if($questions->isEmpty())
        {
            return new t_question;
        }        

        // 問題抽選
        $x = count($questions) - 1;
        srand(time()); // 乱数
        $result = $questions[rand(0, $x)];

        // 問題情報更新
        $result->q_kbn = '1'; /* 出題中 */
        $result->save();

        return $result;
    }

    // 問題取得
    public function getQuestion(Request $request)
    {
        $result = null;

        if(isset($request['q_id']))
        {
            $result = t_question::where('q_id', '=', $request['q_id'])->first();
        }
        else
        {
            $result = t_question::where('q_kbn', '=', '1')->first();
        }

        if($result == null)
        {
            return new t_question();
        }

        return $result;
    }

    // 回答者抽選
    public function drawingPlayer(Request $request)
    {
        // 回答中→回答済 更新
        $players = m_user::where('a_kbn', '=', '2')->get(); /* 回答中 */
        foreach ($players as $data)
        {
            $data->a_kbn = '9';
            $data->save();
        }

        // 抽選対象ユーザ情報取得
        $players = m_user::where('a_kbn', '=', '1')->get();

        // 抽選
        $result = self::drawing($players, self::$_challengerMax);

        // 回答者情報登録
        foreach ($result as $data)
        {
            $data->a_kbn = '2'; /* 回答中 */
            $data->save();
        }

        return $result;
    }

    // 回答者取得
    public function getPlayer(Request $request)
    {
        // 回答中ユーザ情報取得
        $players = m_user::select([
            'user_id',
            'user_name',
            'department',
        ])
        ->where('a_kbn', '=', '2')
        ->get();
        
        return $players;
    }

    // 回答送信
    public function sendAnswer(Request $request)
    {
        $myId = $request['my_user_id']; // ログインユーザID
        $myAnswer = $request['my_answer']; // 回答番号

        // ユーザ情報取得
        $player = m_user::where('user_id', '=', $myId)
        ->where('a_kbn', '=', '2')
        ->first();

        if($player == null)
        {
            return null;
        }

        // 回答内容更新
        $player->answer = $myAnswer;
        $player->save();

        return null;
    }

    // 解答開示
    public function takeAnswer(Request $request)
    {
        // 回答中対象ユーザ情報取得
        $players = m_user::where('a_kbn', '=', '2')->get();

        // 出題中問題情報取得
        $question = t_question::where('q_kbn', '=', '1')->first(); /* 出題中 */

        foreach ($players as $data)
        {
            // 回答中→回答済 更新
            $data->a_kbn = '9'; /* 回答済 */
            $data->save();

            // 回答履歴登録
            $item = new t_answer;
            $item->q_id = $question->q_id;
            $item->a_user_id = $data->user_id;
            $item->answer = $data->answer;
            if($data->answer == '1')
            {
                $item->point = $question->option_1_selected ? 2 : 1;
            }
            elseif($data->answer == '2')
            {
                $item->point = $question->option_2_selected ? 2 : 1;
            }
            elseif($data->answer == '3')
            {
                $item->point = $question->option_3_selected ? 2 : 1;
            }
            else
            {
                $item->point = 1; // 未回答・参加ポイントのみ
            }
            $item->save();
        }

        // 参加ユーザ情報取得
        $players = m_user::where('a_kbn', '<>', '0')->get();
        foreach ($players as $data)
        {
            // 得点計算
            $point = t_follower::join('t_answer', function($join) {
                $join->on('t_follower.follower_user_id', '=', 't_answer.a_user_id')
                  ->where('t_follower.user_id', '=', $data->user_id);
            })
            ->sum('t_answer.point');
    
            $answer = t_answer::where('a_user_id', '=', $data->user_id)->first();
            if($answer != null)
            {
                $point += $answer->point + 1; // 本人回答ボーナス
            }
    
            // ユーザ情報 得点 更新
            $data->point = $point;
            $data->save();
        }
        
        // 問題情報 解答開示 更新
        $question->a_disp_flg = true;
        $question->save();

        return null;
    }

    // 解答取得
    public function getAnswer(Request $request)
    {
        $result = t_question::select([
            'q_id',
            'explanation',
            'option_1_selected',
            'option_2_selected',
            'option_3_selected',
        ])
        ->where('q_kbn', '=', '1') /* 出題中 */
        ->where('a_disp_flg', '=', true) /* 回答開示済み */
        ->first();

        if($result == null)
        {
            return new t_question();
        }

        return $result;
    }

    // スコア取得
    public function getScore(Request $request)
    {
        $myId = $request['my_user_id']; // ログインユーザID

        // 回答中ユーザ情報取得
        $player = m_user::select([
            'user_id',
            'user_name',
            'department',
            'point',
        ])
        ->where('user_id', '=', $myId)
        ->first();
        
        return $player;
    }

    // ランキング取得
    public function getRanking(Request $request)
    {
        // ランキング情報取得
        $result = m_user::select([
            'user_id',
            'user_name',
            'department',
            'point',
            DB::raw('(select count(point) FROM m_user b WHERE m_user.point < b.point) + 1 as rank'),
        ])->where('a_kbn', '<>', '0')
        ->orderByRaw('point desc, user_id asc')
        ->take(10)->get();

        return $result;
    }

    // 回答確認
    public function checkAnswer(Request $request)
    {
        // 回答中対象ユーザ情報取得
        $players = m_user::where('a_kbn', '=', '2')
        ->select([
            'user_id',
            'user_name',
            'answer',
        ])->get();

        return $players;
    }

    // private:抽選
    function drawing($list, int $count) :array
    {
        // 対象数
        $x = count($list) - 1;

        // セーフティコード
        $max = ($x < $count ? $x : $count);

        $result = array();

        // ランダムに規定数選出
        $exist = array(); // 追加済み確認用
        srand(time()); // 乱数
        for ($i = 1 ; $i <= $max ; $i++)
        {
            // 選出が重複しないように制御
            while(true)
            {
                $player = $list[rand(0, $x)];
                if(in_array($player->id, $exist))
                {
                    continue; // 重複除く
                }
                $exist[] = $player->id;
                $result[] = $player;
                break;
            }
        }

        return $result;
    }

}
