var parse = require('url').parse;
module.exports = function(obj){
    return function(req,res,next){
        if(!obj[req.method]){
            next();
            return;
        }
        var routes = obj[req.method];
        var url = parse(req.url);
        var paths = Object.keys(routes); //遍历路径

        for(var i=0;i<paths.length;i++){
            var path = paths[i];
            var fn = routes[path];
            path = path.replace(/\//g,'\\/').replace(/:(\w+)/g,'([^\\/]+)');
            // 构造正则
            var re = new RegExp('^' + path + '$');
            var captrues = url.pathname.match(re);
            if(captrues){
                var args = [req,res].concat(captrues.splice(1));
                fn.apply(null,args);
                return;
            }
        }
        next();
    }
}