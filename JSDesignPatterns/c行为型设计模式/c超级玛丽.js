// 创建超级玛丽状态类
var MerryState = function(){
    // 内部状态
    var _currentState = {},
        states = {
            jump:function(){
                console.log('jump');
            },
            move:function(){
                console.log('move');
            },
            shoot:function(){
                console.log('shoot');
            },
            squat:function(){
                console.log('squat');
            },
        }
    var Action = {
        changeState:function(){
            var args = arguments;
            _currentState = {}
            if(args.length){
                for(var i=0,len=args.length;i<len;i++){
                    _currentState[args[i]] = true;
                }
            }
            return this;
        },
        goes:function(){
            console.log('触发一次动作');
            for(var i in _currentState){
                // 如果存在就执行他
                states[i] && states[i]();
                console.log('a',states[i]);
            }
            return this;
        }
    }
    return {
        change:Action.changeState,
        goes:Action.goes
    }
}
var merry = new MerryState();
merry.change('jump','shoot').goes().goes().change('squat').goes();