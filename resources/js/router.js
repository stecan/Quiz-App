import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');
const Admin = () => import('./pages/Admin');

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'login', component: Login, },
        { path: '/admin', name: 'admin', component: Admin, },
    ]
})
