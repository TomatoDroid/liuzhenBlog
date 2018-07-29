//生日转换天数函数
var B2d = {
    getUnix(){
        var time = new Date();
        return time.getTime();
    },
    birthday2date(time){
        return Math.ceil((this.getUnix() - new Date(time).getTime())/(24*60*60*1000)) + '天';
    }
}

Vue.directive('birthday',{
    bind(el,binding){
        el.innerHTML = B2d.birthday2date(binding.value);
        el._timer_ = setTimeout(function(){
            el.innerHTML = B2d.birthday2date(binding.value);
        },24*60*60*1000);
    },
    unBind(el){
        clearInterval(el._timer_);
        delete el._timer_;
    }
});

var app = new Vue({
    el:'#app',
    data:{
        birthday:'1995.02.02',
        date:'2018-07-25'
    }
})
