/**
 * 基于已经存在的模板对象克隆出新对象的模式
 * arguments[0] ...表示模板对象
 * 这里是浅层复制
 */
function prototypeExtend(){
    var F = function(){},
        args = arguments,
        i = 0,
        len = args.length;
    for(;i<len;i++){
        for(var j in args[i]){
            F.prototype[j] = args[i][j];
        }
    }
    return new F();
}

var penguin = prototypeExtend(
    {
        speed:20,
        swim:function(){
            console.log('游泳速度:'+this.speed);
        }
    },
    {
        run:function(speed){
            console.log('奔跑速度:'+speed);
        }
    },
    {
        jump:function(){
            console.log('跳跃动作');
        }
    }
);
penguin.swim();