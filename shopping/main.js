// 导包
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './router.js';
import App from './App.vue';
import './style.css';
// 导入产品数据
import productor_data from './product.js';
import { debug } from 'util';

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

// 数组排重
function getFilterArray(array){
    const res = [];
    const json = [];
    for(let i=0,len = array.length;i<len;i++){
        const _self = array[i];
        if(!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}

const store = new Vuex.Store({
    state:{
        // 商品列表数据
        productList:[],
        // 购物车数据
        cartList:[]
    },
    getters:{
        brands:state =>{
            const brands = state.productList.map(item => item.brand);
            return getFilterArray(brands);
        },
        colors: state => {
            const colors =  state.productList.map(item => item.color);
            return getFilterArray(colors);
        }
    },
    mutations: {
        // 添加商品列表
        setProductList(state,data){
            state.productList = data;
        },
        addCart(state,id){
            // 判断购物车是否有该数据，如果有测+1
            const isAdded = state.cartList.find(item => item.id === id);
            if(isAdded){
                isAdded.count ++;
            }else{
                state.cartList.push({
                    id:id,
                    count:1
                });
            }
        },
        // 修改商品数量
        editCartCount(state,payload){
            debugger;
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        // 删除商品
        deleteCart(state,id){
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index,1);
        },
        // 清空购物车
        emptyCart(state){
            state.cartList = [];
        }
    },
    actions:{
        // 请求商品列表
        getProductList(context){
            // 真实环境通过ajax获取，这里用异步模拟
            setTimeout(() => {
                context.commit('setProductList',productor_data);
            },1000);
        },
        // 购买
        buy(context){
            return new Promise(resolve => {
                setTimeout( () => {
                    context.commit('emptyCart');
                    resolve();
                },500);
            });
        }
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