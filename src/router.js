import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        }
    ]
});