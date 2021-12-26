import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');
const Game = () => import('./pages/Game');
const Admin = () => import('./pages/Admin');
const FollowerSelect = () => import('./pages/FollowerSelect');

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    //base : 'bingo2021',
    routes: [
        { path: '/', name: 'game', component: Game, },
        { path: '/login', name: 'login', component: Login, },
        { path: '/admin', name: 'admin', component: Admin, },
        { path: '/followerSelect', name: 'followerSelect', component: FollowerSelect, },
    ]
})
