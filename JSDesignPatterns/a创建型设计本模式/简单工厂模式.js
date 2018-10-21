// 篮球基类
var Basketball = function(){
    this.intro = '篮球盛行于美国';
}
Basketball.prototype = {
    getMenber:function(){
        console.log('每个队伍需要5名队员！');
    },
    getBallSize:function(){
        console.log('篮球很大');
    }
}
// 足球基类
var Football = function(){
    this.intro = '足球在世界范围内很流行';
}
Football.prototype = {
    getMenber:function(){
        console.log('每个队伍需要11名成员');
    },
    getBallSize:function(){
        console.log('足球很大');
    }
}
// 网球基类
var Tennis = function(){
    this.intro = '每年都有很多网球系列赛';
}
Tennis.prototype = {
    getMenber:function(){
        console.log('每个队伍需要1名队员');
    },
    getBallSize:function(){
        console.log('网球很小');
    }
}
// 运动工厂
var SportsFactory = function(name){
    switch(name){
        case 'NBA':
            return new Basketball();
        case 'WordCup':
            return new Football();
        case 'FrenchOpen':
            return new Tennis();
    }
}

// 为世界杯创建一个足球，只需记住运动工厂SportsFactory调用并创建
var football = SportsFactory('WordCup');
console.log(football);
console.log(football.intro);
football.getMenber();
