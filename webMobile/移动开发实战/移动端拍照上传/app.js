var http = require('http');
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');
var static = require('node-static');

var staticServer = new static.Server('./public');

function handleStaticRequest(req,res){
    req.addListener('end',function(){
        staticServer.serve(req,res);
    }).resume();
}

function handleUploadRequest(req,res){
    if(req.method === 'POST'){
        var form = formidable.IncomingForm();
        form.on('error',function(err){
            res.writeHead(500);
            res.write('上传失败: '+err);
            res.end();
        }).parse(req,function(error,fields,files){
            for(var key in files){
                var file = files[key];
                var ws = fs.createWriteStream(path.resolve(__dirname,'public/images',file.name));
                fs.createReadStream(file.path).pipe(ws);
            }
            res.writeHead(200);
            res.end();
        });
    }
}

var app = http.createServer(function(req,res){
    handleStaticRequest(req,res);
    handleUploadRequest(req,res);
});
app.listen(3000,function(){
    console.log('http://127.0.0.1:3000');
});