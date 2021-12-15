<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\m_user;
use App\Models\t_answer;
use App\Models\t_follower;
use App\Models\t_question;

class AxiosMainController extends Controller
{
    // 手札最大数
    private $_followerMax = 20;
    // 回答者最大数
    private $_challengerMax = 3;


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
        ->where('a_kbn', '=', '1')
        ->where('user_id', '<>', $myId) /* 自分は抽選対象にしない */
        ->get();

        // 抽選
        $result = drawing($players, $_followerMax);

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
        $result = t_question::select([
            'q_id',
            'q_text',
            'option_1',
            'option_2',
            'option_3',
        ])
        ->where('q_kbn', '=', '1') /* 出題中 */
        ->first();

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
        $result = drawing($players, $_challengerMax);

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
            'id',
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
            $item->save();
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

    // スコア計算
    public function calcScore(Request $request)
    {
        return calcPoint($request['my_user_id']);
    }

    // ランキング
    public function ranking(Request $request)
    {
        // 参加ユーザの得点を再集計
        $players = m_user::select(['user_id'])->where('a_kbn', '<>', '0')->get();
        foreach($players as $player)
        {
            calcPoint($player->user_id);
        }

        // ランキング情報取得
        $result = m_user::m_user::select([
            'user_id',
            'user_name',
            'department',
            'point',
        ])->where('a_kbn', '<>', '0')->get();

        return $result;
    }


    // private:抽選
    private function drawing($list, int $count) :array
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
                $exist += $player->id;
                $result += $player;
                break;
            }
        }

        return $result;
    }

    // private:得点計算
    private function calcPoint(string $userId) :int
    {
        $result = t_follower::join('t_answer', function($join) {
            $join->on('t_follower.follower_user_id', '=', 't_answer.a_user_id')
              ->where('t_follower.user_id', '=', $userId);
        })
        ->sum('t_answer.point');

        $myAnswer = t_answer::where('a_user_id', '=', $userId)->first();
        if($myAnswer != null)
        {
            $result += $myAnswer->point + 1;
        }

        // ユーザ情報 得点 更新
        $user = m_user::where('user_id', '=', $userId)->first();
        $user->point = $result;
        $user->save();

        return $result;
    }
}
