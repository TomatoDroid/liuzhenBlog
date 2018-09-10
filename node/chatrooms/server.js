var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {}

// 错误处理
function send404(response){
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404 : resourse not found');
    response.end();
}
// 提供文件数据服务
function sendFile(response, filePath,fileContents){
    response.writeHead(
        200,
        {"content-type": mime.getType(path.basename(filePath))}
    );
    response.end(fileContents);
}
// 提供静态文件服务
function serverStatic(response,chche,absPath){
    if(chche[absPath]){
        sendFile(respons, absPath, chche[absPath]);
    }else{
        fs.exists(absPath,function(exists){
            if(exists){
                fs.readFile(absPath,function(err,data){
                    if(err){
                        send404(response);
                    }else{
                        chche[absPath] = data;
                        sendFile(response,absPath,data);
                    }
                });
            }else{
                send404(response);
            }
        });
    }
}
// 创建HTTP服务器
var server = http.createServer(function(request,response){
    var filePath = false;
    if(request.url == '/'){
        filePath = 'public/index.html';
    }else{
        filePath = 'public' + request.url;
    }
    var absPath = './'+filePath;
    serverStatic(response,cache,absPath);
});
// 启动HTTP服务
server.listen(3000,function(){
    console.log('Server listening on port 3000');
});

var chartServer = require('./lib/chat_server');
chartServer.listen(server);