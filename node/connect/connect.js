// 最小的connect程序
var connect = require('connect');
var app = connect();
// 使用中间件 use
app.use(logger);
app.listen(3000);

// logger中间件
function logger(req,res,next){
    console.log('%s, %s',req.method,req.url);
    next();
}
