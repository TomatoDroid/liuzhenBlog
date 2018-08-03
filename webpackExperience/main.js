// 导入vue框架
import Vue from 'vue';
// 导入app.vue组件
import App from './app.vue';

// 创建Vue的根实例
var app = new Vue({
    el:'#app',
    render: h => h(App)
});