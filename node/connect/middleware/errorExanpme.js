var connect = require('connect');
connect()
.use(function(req,res,next){
    foo();
    res.setHeaders('Content-Type','text/plain');
    res.end('Hello World!');
}).listen(3000);