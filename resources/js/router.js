import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');
const Game = () => import('./pages/Game');


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', name: 'login', component: Login, },
        { path: '/', name: 'game', component: Game, },
    ]
})
