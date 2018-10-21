// var Demo = function(){}

// 安全模式类  核心：在构造函数开始时，先判断对象this指代的是不是对象类
var Demo = function(){
    if(!(this instanceof Demo)){
        return new Demo();
    }
}

Demo.prototype = {
    show:function(){
        console.log('show');
    }
}

var demo = new Demo();
demo.show();

var demo1 = Demo();
demo1.show();     //Cannot read property 'show' of undefined