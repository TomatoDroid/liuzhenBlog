var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req,res){
    var types = {
        '.html':'text/html',
        '.css':'text/css',
        '.vtt':'text/vtt',
    }
    // 获取资源扩展名
    var ext = path.extname(req.url);
    var type = types[ext] || 'text/plain';
    fs.readFile(path.join(__dirname,req.url),'binary',function(err,file){
        if(err){
            console.log(err);
            res.writeHead(404);
        }else{
            res.writeHead(200, {'Content-Type':type});
            res.write(file,'binary');
        }
        res.end();
    });
});
server.listen(3000);