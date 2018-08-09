import Vue from 'vue';
// 使用路由插件
import VueRouter from 'vue-router';
import Vuex from 'Vuex';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
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
    next();
})

const store = new Vuex.Store({
    //vuex的配置
    state: {
        count:0,
        list:[1,2,3,4,5,10,22,43,55]
    },
    // 唯一改变store数据的方式
    // 注意不能使用异步方式修改
    mutations:{
        increament(state,n=1){
            state.count += n;
        },
        // 包含type属性的对象
        decrease(state,params){
            state.count -= params.count;
        }
    },
    // 对state的数据进行过滤，并使用在多个地方
    getters:{
        filteredList:state => {
            return state.list.filter(item => item < 10);
        },
        // getters也可以使用getters
        listCount:(state,getters) => {
            return getters.filteredList.length;
        }
    },
    // action专门处理异步操作，提交的muation
    actions:{
        // increament(context){
        //     context.commit('increament',10);
        // }
        asyncIncreament(context){
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('increament',10);
                    resolve();
                }, 2000);
            });
        }
    }
});
new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h => h(App)
});