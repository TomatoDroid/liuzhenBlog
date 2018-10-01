var http = require('http');
var fs = require('fs');
var join = require('path').join;

http.createServer(function(req,res){
    var index = './sse.html';
    var fileName;
    var interval;
    if(req.url === '/'){
        fileName = index;
    }else{
        fileName = '.'+req.url;
    }
    if(fileName === './stream'){
        res.writeHeader(200,{
            "Content-Type":"text/event-stream",
            "Cache-Control":"no-cache",
            "Connection":"keep-alive",
        });
        res.write('retry:1000\n');
        res.write('data:'+(new Date())+'\n\n');
        interval = setInterval(() => {
            res.write('data:'+(new Date())+'\n\n');
        }, 1000);
        // 监听close事件，用于停止定时器
        req.connection.addListener('close',function(){
            clearInterval(interval);
        },false);
    }else if(fileName === index){
        var path  = join(__dirname,fileName);
        fs.exists(path,function(exists){
            if(exists){
                fs.readFile(path,function(error,content){
                    if(error){
                        res.writeHeader(500);
                        res.end();
                    }else{
                        res.writeHeader(200,{'Content-Type':'text/html'});
                        res.end(content,'utf-8');
                    }
                });
            }else{
                res.writeHeader(404);
                res.end();
            }
        });
    }else{
        res.writeHeader(404);
        res.end();
    }
}).listen(8080,'127.0.0.1');
console.log('http://127.0.0.1:8080/');