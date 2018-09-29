// 原型继承具有和类式继承的缺点
function inheritObject(o){
    // 声明过度函数
    function F(){}
    F.prototype = o;
    return new F();
}
// 声明基类
var book = {
    name:'JS book',
    alikeBook:['css Book','html book']
}
var newBook = inheritObject(book);
newBook.name = 'ajax Book';
newBook.alikeBook.push('xml book');
var otherBook = inheritObject(book);
otherBook.name = 'flash Book';
otherBook.alikeBook.push('as book');
console.log(newBook.name);
console.log(newBook.alikeBook);   //[ 'css Book', 'html book', 'xml book', 'as book' ]
console.log(otherBook.name);
console.log(otherBook.alikeBook);   //[ 'css Book', 'html book', 'xml book', 'as book' ]
console.log(book.alikeBook);

// 寄生式继承
function createBook(obj){
    // 通过原型继承的方式创建对象
    var o = new inheritObject(obj);
    o.getName = function(){
        console.log(name);
    }
    return o;
}
var book3 = createBook(book);
console.log(book3.name);
console.log(book3.alikeBook);
