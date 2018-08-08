import Vue from 'vue';
// 使用路由插件
import VueRouter from 'vue-router';
import App from './app.vue';
import VueBus from './vue-bus';

Vue.use(VueRouter);
Vue.use(VueBus);
// 创建一个数组来定制路由匹配列表
const Routers = [
    { path: '/index', component: (resolve) => require(['./views/index.vue'],resolve)},
    { path: '/about', component: (resolve) => require(['./views/about.vue'],resolve)},
    { path: '*', redirect: '/index' },
    { path: '/user/:id', component: (resolve) => require(['./views/user.vue'],resolve) }
]

const RouterConfig = {
    mode:'history',
    routes:Routers
};

const router = new VueRouter(RouterConfig);

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});