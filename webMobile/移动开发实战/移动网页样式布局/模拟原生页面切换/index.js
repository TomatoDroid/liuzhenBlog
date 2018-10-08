// 极简路由
var Router = function(){
    this._routers = [];
    this._get = function(hash){
        var router = this._routers.filter(function(item,index){
            return '#'+item.url === hash;
        });
        return _routers[0] || {};
    }.bind(this);
}
//注意路由匹配
/**
 * 堆入routers队列
 * @param {Object} route
 * @return {Router}
 */
Router.prototype.push = function(route){
    this._routers.push(route);
    return this;
}
/**
 * 初始化
 * @return {Router}
 */
Router.prototype.init = function(){
    this.go(this._get(location.hash));
    window.addEventListener('hashchange',function(){
        this.go(this._get(location.hash));
    }.bind(this),false);
    return this;
}
/**
 * 路由跳转
 * @param {String} page
 * @return {Router}
 */
Router.prototype.go = function(page){
    var enter_page = document.querySelector(page.select);
    if(!enter_page) return false;
    var enter = (function(){
        enter_page.classList.add('enter');
    }.bind(this)());
    if(page.hasOwnPrototype('handle')){
        page.handle.call(this);
    }
}
// 创建Route实例
var r = new Router();
var home_page = {
    url:'/',
    selector:'.page-home',
    handle:function(){
        console.log('Home page enter.');
    }
}
var start_page = {
    url:'/',
    selector:'.page-start',
    handle:function(){
        console.log('Start page enter.');
    }
}
r.push(home_page).push(start_page).init();