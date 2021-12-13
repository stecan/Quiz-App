<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function load() 
    {
        //$hello = 'Hello,World!';
        //$hello_array = ['Hello', 'こんにちは', 'ニーハオ'];

        //return view('admin', compact('hello', 'hello_array'));
        return view('admin');
    }

    public function request(Request $request)
    {
        return view('admin');
    }
}
