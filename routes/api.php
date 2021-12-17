<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api'], 'prefix' => 'axios', 'as' => 'axios.'], function () {
    $rootMain = 'App\Http\Controllers\AxiosMainController';
    // ■プレイヤー側
    // プレイヤー情報取得
    Route::get('getuser', $rootMain . '@getUser')->name('get.user');
    // 手札抽選
    Route::post('drawingcard', $rootMain . '@drawingCard')->name('drawing.card');
    // TODO 手札抽選終了
    // 手札取得
    Route::get('getcard', $rootMain . '@getCard')->name('get.card');
    // 問題取得
    Route::get('getquestion', $rootMain . '@getQuestion')->name('get.question');
    // 回答者取得
    Route::get('getplayer', $rootMain . '@getPlayer')->name('get.player');
    // 回答送信
    Route::post('sendanswer', $rootMain . '@sendAnswer')->name('send.answer');
    // 解答取得
    Route::get('getanswer', $rootMain . '@getAnswer')->name('get.answer');
    // スコア計算・取得
    Route::get('getscore', $rootMain . '@getScore')->name('get.score');
    // ランキング取得
    Route::get('getranking', $rootMain . '@getRanking')->name('get.ranking');

    // ■運営側
    // 問題抽選
    Route::get('drawingquestion', $rootMain . '@drawingQuestion')->name('drawing.question');
    // 回答者抽選
    Route::get('drawingplayer', $rootMain . '@drawingPlayer')->name('drawing.player');
    // 回答確認
    Route::get('checkanswer', $rootMain . '@checkAnswer')->name('check.answer');
    // 解答開示
    Route::post('takeanswer', $rootMain . '@takeAnswer')->name('take.answer');
});
