// 单继承  浅复制
var extend = function(target,source){
    // 循环原对象中的属性
    for(var property in source){
        // 将原对象中的属性复制到目标对象上
        target[property] = source[property]
    }  
    return target;
}
var book  ={
    name:'JavaScript设计模式',
    alike:['css','html','JavaScript']
}
var anotherBook = {
    color:'blue'
}
extend(anotherBook,book);
console.log(anotherBook.name);
console.log(anotherBook.alike);

anotherBook.alike.push('ajax');
anotherBook.name = '设计模式';
console.log(anotherBook.name);
console.log(anotherBook.alike);
console.log(book.name);
console.log(book.alike);


// 多继承  属性复制
var mix = function(){
    var i = 1,                  //从第二个参数起为被继承对象
        len = arguments.length, //获取参数的长度
        target = arguments[0],  //第一个对象为目标对象
        arg;                    //缓存参数对象
    for(;i<len;i++){
        // 缓存当前对象
        arg = arguments[i];
        for(var property in arg){
            target[property] = arg[property];
        }
    }
    return target;
}
// 当然也可以放到Object中
// ------------------------------------------------ !!!!     Object.prototype.mix = function(){}