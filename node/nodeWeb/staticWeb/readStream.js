/* 
var http = require('http');
var fs  =require('fs');
var parse = require('url').parse;
var join = require('path').join;

var root = __dirname;
var server = http.createServer(function(req,res){
    var url = parse(req.url);
    var path = join(root,url.pathname);
    console.log('path',path);
    var stream = fs.createReadStream(path);
    stream.on('data',function(chunk){
        res.write(chunk);
    });
    stream.on('end',function(){
        res.end();
    });
});

server.listen(3000);
*/

// 简化版本
var http = require('http');
var fs = require('fs');
var parse = require('url').parse;
var join = require('path').join;

var root = __dirname;
var server = http.createServer(function(req,res){
    var url = parse(req.url);
    var path = join(root, url.pathname);
    console.log('path',path);
    var stream = fs.createReadStream(path);
    stream.pipe(res);
    // 监听错误
    stream.on('error',function(err){
        res.statusCode = 500;
        res.end('Internal Server Error!');
    });
});

server.listen(3000);