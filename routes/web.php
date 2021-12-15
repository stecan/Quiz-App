<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/admin', 'App\Http\Controllers\AdminController@load');
Route::post('/admin/request', 'App\Http\Controllers\AdminController@request');

// 手札抽選
Route::get('/axios/drawingcard', 'App\Http\Controllers\AxiosMainController@drawingCard')->name('draw_card');
// 手札抽選終了

// 問題抽選
Route::get('/axios/drawingquestion', 'App\Http\Controllers\AxiosMainController@drawingQuestion')->name('drawing_question');
// 問題取得
Route::get('/axios/getquestion', 'App\Http\Controllers\AxiosMainController@getQuestion')->name('get_question');

// 回答者抽選
Route::get('/axios/drawingplayer', 'App\Http\Controllers\AxiosMainController@drawingPlayer')->name('drawing_player');
// 回答者取得
Route::get('/axios/getplayer', 'App\Http\Controllers\AxiosMainController@getPlayer')->name('get_player');

// 回答送信
Route::post('/axios/sendanswer', 'App\Http\Controllers\AxiosMainController@sendAnswer')->name('send_answer');
// 回答確認

// 解答開示
Route::post('/axios/takeanswer', 'App\Http\Controllers\AxiosMainController@takeAnswer')->name('take_answer');
// 解答取得
Route::get('/axios/getanswer', 'App\Http\Controllers\AxiosMainController@getAnswer')->name('get_answer');

// スコア計算
Route::get('/axios/calcscore', 'App\Http\Controllers\AxiosMainController@calcScore')->name('calc_score');
// ランキング
Route::get('/axios/ranking', 'App\Http\Controllers\AxiosMainController@ranking')->name('ranking');

