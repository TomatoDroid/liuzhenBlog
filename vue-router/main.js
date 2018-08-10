import Vue from 'vue';
// 使用路由插件
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);
// 创建一个数组来定制路由匹配列表
const Routers = [
    { 
        path: '/index', 
        meta:{
            title:'首页'
        },
        component: (resolve) => require(['./views/index.vue'],resolve)
    },
    { 
        path: '/about', 
        meta:{
            title:'介绍页'
        },
        component: (resolve) => require(['./views/about.vue'],resolve)
    },
    { 
        path: '*', 
        redirect: '/index' 
    },
    { 
        path: '/user/:id', 
        meta:{
            title:'个人主页'
        },
        component: (resolve) => require(['./views/user.vue'],resolve) 
    }
]

const RouterConfig = {
    mode:'history',
    routes:Routers
};

const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title;
    console.log('beforeEach','修改');
    next();
})

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});