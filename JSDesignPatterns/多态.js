// 多态  一种方法多种调用方式
function Add(){
    function zero(){
        return 10;
    }
    function one(num){
        return 10+num;
    }
    function two(num1,num2){
        return num1+num2;
    }
    this.add = function(){
        var arg = arguments,
            length = arg.length;
        switch(length){
            case 0:
                return zero();
            case 1:
                return one(arg[0]);
            case 2:
                return two(arg[0],arg[1]);
        }
    } 
}

var A = new Add();
console.log(A.add());
console.log(A.add(10));
console.log(A.add(10,20));