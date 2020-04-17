//Package import
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';

//Local import
import { routes } from './routes';
import store from './store/store';

// USE Vue-router
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://tingcar-stock-sample.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes,
});

// Main Vue
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
