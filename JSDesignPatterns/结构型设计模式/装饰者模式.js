//  使用装饰者模式可以不用了解方法内部结构就可以使用
// 添加点击事件
var decorator = function(input,fn){
    var input = document.getElementById(input);
    if(typeof input.onclick === 'function'){
        var oldClickFn = input.onclick;
        input.onclick = function(){
            oldClickFn();
            fn();
        }
    }else{
        input.onclick = fn;
    }
}