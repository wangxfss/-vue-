// 引入vue
import Vue from 'vue';

import VueRouter from 'vue-router';

import App from './App.vue';

import router from './routes/router'

Vue.use(VueRouter);

var vm = new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    },
    router
})