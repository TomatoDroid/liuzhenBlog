// 子类的原型对象--类式继承 不常用
// 声明父类
function SuperClass(){
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}
// 声明子类
function SubClass(){
    this.subValue = false;
}
// 继承父类
SubClass.prototype = new SuperClass();

SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

var instance = new SubClass();
console.log(instance.getSubValue());   //false
console.log(instance.getSuperValue()); //true

// 使用instanceof可以判断某个类是否是某个对象的实例
console.log(instance instanceof SuperClass); //true
console.log(instance instanceof SubClass);  //true
console.log(SubClass instanceof SuperClass); //false
// SubClass.prototype的原型继承了SuperClass
console.log(SubClass.prototype instanceof SuperClass); //true

// 两个缺点 1父类中的共有属性要是引用类型，就会在子类中被又有实例共用，因此
//         只要有一个子类的示例更改子类原型对象就从父类构造函数中继承来的共有
//         属性就会直接影响其他子类
function SuperClass1(){
    this.books = ['js设计模式','js权威指南'];
}
var superClass1 = new SuperClass1();
function SubClass1(){}
SubClass1.prototype = new SuperClass1();
var instance1 = new SubClass1();
var instance2 = new SubClass1();
console.log(instance1.books); //[ 'js设计模式', 'js权威指南' ]
instance2.books.push('JS语言精粹');
console.log(instance1.books); //[ 'js设计模式', 'js权威指南', 'JS语言精粹' ]
        // 2实例化父类无法向父类构造函数传递参数
console.log(superClass1.books);