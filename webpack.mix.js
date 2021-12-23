const mix = require('laravel-mix');
const glob = require('glob');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot('/bingo2021/')
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/router.js', 'public/js')
    .js('resources/js/store.js', 'public/js')
    .js('resources/js/vuetify.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .vue();
