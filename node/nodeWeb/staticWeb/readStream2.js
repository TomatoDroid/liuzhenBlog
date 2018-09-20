// 更完善的版本
var http = require('http');
var fs = require('fs');
var parse = require('url').parse;
var join = require('path').join;

var root = __dirname;
var server = http.createServer(function(req,res){
    var url = parse(req.url);
    var path = join(root, url.pathname);
    // 使用先发制人的stat
    fs.stat(path,function(err,stat){
        if(err){
            // Error No Entity
            if('ENOENT' == err.code){
                res.statusCode = 404;
                res.end('Not Found');
            }else{
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        }else{
            res.setHeader('Content-Length',stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);
            stream.on('error',function(err){
                res.statusCode = 500;
                res.end('Internal Server Error');
            });
        }
    });
});
server.listen(3000);