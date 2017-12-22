
import VueRouter from 'vue-router';

import index from '../components/index.vue'

export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: index
        }
    ]
});