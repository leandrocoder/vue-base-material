import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue';
import About from './pages/About.vue';

import VueMaterial from 'vue-material'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

Vue.use(VueRouter);
Vue.use(VueMaterial)

let main = {
    initialize: function() {

        const router = new VueRouter({
            routes
        });

        new Vue({ // eslint-disable-line no-new
            el: '#app',
            router,
            render: (h) => h(App)
        })
    }
};

main.initialize();