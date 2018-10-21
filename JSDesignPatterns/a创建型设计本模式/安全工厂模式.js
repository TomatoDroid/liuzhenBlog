var Factory = function(type,content){
    if(this instanceof Factory){
        var a = new this[type](content);
        return a;
    }else{  
        return new Factory(type,content);
    }
}

Factory.prototype = {
    Java:function(content){
        console.log(content);
    },
    JavaScript:function(content){
        console.log(content);
    },
    PHP:function(content){
        console.log(content);
    },
}
var java = Factory('Java','简单的面向对象');
