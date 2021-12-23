import Vue from "vue";
import vuetify from "./vuetify";
import router from "./router";
import Slick from 'vue-slick';
import store from './store';
const app = new Vue({
    el: "#app",
    router,
    vuetify,
    Slick,
    store,
    components: {
    },
});