// 站长页面统计 img
var Count = (function(){
    var _img = new Image();
    return function(param){
        var str = 'http://www.count.com/a.gif?';
        for(var i in param){
            str += i + '=' +param[i];
        }
        _img.src = str;
    }
})();
Count({num:10});
