import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');
const Game = () => import('./pages/Game');
const Admin = () => import('./pages/Admin');

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    //base : process.env.BASE_URL,
    base : 'bingo2021',
    routes: [
        { path: '/', name: 'login', component: Login, },
        { path: '/game', name: 'game', component: Game, },
        { path: '/admin', name: 'admin', component: Admin, },
    ]
})
