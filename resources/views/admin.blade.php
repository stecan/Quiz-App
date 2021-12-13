@extends('layouts.app')

@section('content')
<form action="{{action('App\Http\Controllers\AdminController@request')}}" method="post">
@csrf
<v-container  style="background-image : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEtiRUI7c3D-z3dIu4fJq29QPppfMK6KapQ&usqp=CAU');background-repeat:repeat;">
    <v-row no-gutters>
        <v-col>
            <v-btn rounded elevation="10" type='submit'>問題抽選</v-btn>
        </v-col>
        <v-col>
            <v-img max-height="350px" max-width="350px" src="https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png"></v-img>
        </v-col>
        <v-col cols="6">
        </v-col>
    </v-row>
    <v-row>&nbsp;</v-row>
    <v-row no-gutters>
        <v-col>
            <v-btn rounded elevation="10">回答者抽選</v-btn>
        </v-col>
        <v-col v-for="n in 3">
            <v-card max-width="200px">
                <v-img max-height="200px" max-width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"></v-img>
                <v-card-title>name is ...@{{ n }}</v-card-title>
                <v-card-text>belongs is ...</v-card-text>
            </v-card>
        </v-col>
        <v-col cols="2">
        </v-col>
    </v-row>
    <v-row>&nbsp;</v-row>
    <v-row no-gutters>
        <v-col>
            <v-btn rounded elevation="10">回答状況確認</v-btn>
        </v-col>
        <v-col>
            <v-btn rounded elevation="10">解答開示</v-btn>
        </v-col>
        <v-col cols="7">
        </v-col>
    </v-row>
</v-container>
</form>
@endsection
