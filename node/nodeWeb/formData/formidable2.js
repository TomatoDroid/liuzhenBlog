// 更精简的写法
var http = require('http');
var formidable = require('formidable');

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        switch(req.method){
            case 'GET':
                show(res);
                break;
            case 'POST':
                upload(req,res);
                break;
        }
    }
});
server.listen(3000);

function show(res){
    var html = '<html><head><title>upload</title></head><body>'+
                '<h1>Upload</h1>'+
                '<form method="post" action="/" enctype="multipart/form-data">'+
                    '<p>field:<input type="text" name="field-name"></p>'+
                    '<p>file:<input type="file" name="formidable-file"></p>'+
                    '<p><input type="submit" value="upload"></p>'+
                '</form></body></html>';
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
}
function upload(req,res){
    if(!isFormData(req)){
        res.statusCode = 400;
        res.end('Bad Request:expacting multipart/form-data');
        return;
    }else{
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            console.log('fields',fields);
            console.log('files',files);
            res.end('upload complete');
        });
    }
}

function isFormData(req){
    var header = req.headers['content-type'] || '';
    return 0 == header.indexOf('multipart/form-data');
}