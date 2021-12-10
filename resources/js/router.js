import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('./pages/Login');


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'login', component: Login, },
    ]
})
