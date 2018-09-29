// 用闭包创建类
var Book = (function(){
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(name){}
    // 创建类
    function _book(newId,newName,newPrice){
        // 私有变量
        var name, price;
        // 私有方法
        function checkID(id){}
        // 特权方法
        this.setName = function(){}
        this.getName = function (){}
        this.setPrice = function (){}
        this.getPrice = function (){}
        // 共有属性
        this.id = newId;
        // 共有方法
        this.copy = function(){}
        bookNum++;
        if(bookNum > 2){
            throw new Error('我们仅出版了两本书');
        }
        // 构造器
        this.setName(name);
        this.setPrice(price);
    }
    // 构建原型
    _book.prototype = {
        // 静态共有属性
        isJSBook : false,
        // 静态共有方法
        display : function(){}
    };
    // 返回类
    return _book;
})();

var book = new Book('1','JS创建类','24');

console.log(book.id);
console.log(book.isJSBook);
console.log(Book);