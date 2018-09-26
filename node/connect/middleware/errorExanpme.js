var connect = require('connect');
connect()
.use(function(req,res,next){
    foo();
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World!');
}).listen(3000);