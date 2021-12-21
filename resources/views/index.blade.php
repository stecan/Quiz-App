<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Laravel</title>
  <link rel="stylesheet" href="{{asset('css/app.css')}}" />
  <link rel="stylesheet" href="{{asset('css/slick-theme.css')}}" />
  <link rel="stylesheet" href="{{asset('css/slick.css')}}" />
</head>

<body>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
  <script src="js/jquery.js"></script>
  <script src="js/slick.min.js"></script>
  <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>

</html>