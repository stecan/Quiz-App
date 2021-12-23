import Vue from "vue";
import vuetify from "./vuetify";
import router from "./router";
import store from './store'

const app = new Vue({
    el: "#app",
    router,
    vuetify,
    store
});