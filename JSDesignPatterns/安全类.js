var Book = function(title, time, type){
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
    }else{
        return new Book(title, time, type);
    }
}
var book = Book('安全模式','2018','JS');
console.log(book);
console.log(book.title);
// window是浏览器对象
// console.log(window.title);