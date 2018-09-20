var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req,res){
    switch(req.method){
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data',function(trunk){
                item += trunk;
                console.log('trunk',trunk);
            });
            req.on('end',function(){
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            var body = items.map(function(item,i){
                return i+') '+item;
            }).join('\n');
            // 使用node提供的字节编码  
            // 设定Content-Length域会隐含禁用node的块编码，传输的更少，所以提升性能
            res.setHeader('Content-Length',Buffer.byteLength(body));
            res.setHeader('Content-Type','text/plain; chart-set="utf-8"');
            res.end(body);
            break;
        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1),10);
            console.log('索引： '+i);
            if(isNaN(i)){
                res.statusCode = 400;
                res.end('Invalid item id');
            }else if(!items[i]){
                res.statusCode = 404;
                res.end('Item not found');
            }else{
                items.splice(i,1);
                res.end('OK\n');
            }
            break;
        case 'PUT':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1),10);
            console.log('索引： '+i);
            var item = '';
            req.setEncoding('utf8');
            req.on('data',function(trunk){
                item += trunk;
                console.log('trunk：',trunk);
            });
            req.on('end',function(){
                if(isNaN(i)){
                    res.statusCode = 400;
                    res.end('Invalid item id');
                }else if(!items[i]){
                    res.statusCode = 404;
                    res.end('Item not found');
                }else{
                    items[i] = item;
                    res.end('OK\n');
                }
            });
    }
});

server.listen(3000);