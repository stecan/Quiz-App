import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');
const Game = () => import('./pages/Game');
const Admin = () => import('./pages/Admin');

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base : 'bingo2021',
    routes: [
        { path: '/login', name: 'login', component: Login, },
        { path: '/', name: 'game', component: Game, },
        { path: '/admin', name: 'admin', component: Admin, },
    ]
})
