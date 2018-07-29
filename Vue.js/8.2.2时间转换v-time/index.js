Vue.directive('time',{
    bind(el,binding){
        el.innerHTML = Time.getFormatTime(binding.value);
        el._timeout_ = setTimeout(function(){
            el.innerHTML = Time.getFormatTime(binding.value);
        },60000);
    },
    unbind(el){
        clearInterval(el._timeout_);
        delete el._timeout_;
    }
});

var app = new Vue({
    el:'#app',
    data:{
        timeNow : (new Date()).getTime(),
        timeBefore: 1488930695721
    }
});
