// 添加多个中间件
var connect = require('connect');
var app = connect();
app.use(logger).use(hello).listen(3000);

// connect().use().use().listen();

function logger(req,res,next){
    console.log('%s, %s',req.method,req.url);
    next();
}

function hello(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
}