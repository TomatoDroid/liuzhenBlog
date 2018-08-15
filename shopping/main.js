// 导包
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './router.js';
import App from './App.vue';
import './style.css';

Vue.use(Vuex);
Vue.use(VueRouter); 

const RouterConfig = {
    mode:'history',
    routes:Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach( route => {
   window.scrollTo(0,0); 
});

const store = Vuex.store({
    state:{

    },
    getters:{

    },
    mutations: {
        
    },
    actions:{

    },
});

new Vue({
    el:'#app',
    router:router,
    store:store,
    render: h => {
        return h(App);
    }
});