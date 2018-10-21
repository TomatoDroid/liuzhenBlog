/**
 * 命名空间的管理
 */
var A = {
    Util:{
        util_method2:function(){

        },
        util_method2:function(){

        }
    },
    Tool:{
        tool_method1:function(){

        },
        tool_method2:function(){

        }
    }
}

/**
 * 管理静态变量
 */
var Conf = (function(){
    var conf = {
        MAX_NUM:100,
        MIN_NUM:1,
        COUNT:1000
    }
    return {
        get:function(name){
            return conf[name] ? conf[name] : null;
        }
    }
})();

var count = Conf.get('MAX_NUM');
console.log(count);

/**
 * 惰性单列（延迟创建对象）
 */
var LazySingle = (function(){
    var _instance = null;
    function Single(){
        return {
            publicMethod:function(){},
            publicPrototype:'1.0'
        }
    }
    return function(){
        if(!_instance){
            _instance = Single();
        }
        return _instance;
    }
})();
console.log(LazySingle);
console.log(LazySingle().publicPrototype);