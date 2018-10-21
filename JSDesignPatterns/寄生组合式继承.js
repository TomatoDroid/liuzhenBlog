// 终极继承

//原型继承
function inheritObject(o){
    function F(){}
    F.prototype = o;
    return new F();
}

/**
 * 寄生组合式继承
 * 传递参数  subClass 子类
 * 传递参数  superClass 父类
 */
function inheritPrototype(subClass,superClass){
    // 复制一份父类的原型副本保存在变量中
    console.log('superClass.prototype',superClass.prototype);
    var p = inheritObject(superClass.prototype);
    console.log('p---: ',p);
    console.log('p.constructor---: ',p.constructor);
    // 修改因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass;
    console.log('p.constructor: ',p.constructor);
    console.log('p',p);
    // 设置子类的类型
    subClass.prototype = p;
}

// 定义父类
function SuperClass(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}
// 定义父类原型方法
SuperClass.prototype.getName = function(){
    console.log(this.name);
}
// 定义子类
function SubClass(name,time){
    // 构造函数式继承
    SuperClass.call(this,name);
    this.time = time;
}
// 寄生式继承父类原型
inheritPrototype(SubClass,SuperClass);
// 子类新增原型方法
SubClass.prototype.getTime = function(){
    console.log(this.time);
}
// 创建测试类
var instance1 = new SubClass('js book',2014);
var instance2 = new SubClass('css book',2013);

instance2.colors.push('black');
console.log(instance1.colors);
console.log(instance2.colors);
instance2.getName();
instance2.getTime();
console.log(instance1 instanceof SuperClass);  //true
