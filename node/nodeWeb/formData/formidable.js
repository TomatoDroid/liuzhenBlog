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
                    '<p>field:<input type="text name="field-name"></p>'+
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
    }
    var form = new formidable.IncomingForm();
    form.on('field',function(name,value){
        console.log('field',name);
        console.log('value',value);
    });
    form.on('file',function(name,file){
        // console.log('name',name);
        // console.log('file',file);
    });
    form.on('end',function(){
        res.end('upload complete');
    });
    form.on('process',function(bytesReceived,bytesExpected){
        var percent = Math.floor(bytesReceived/bytesExpected*100);
        console.log('percent',percent);
    });
    form.parse(req);
}

function isFormData(req){
    var type = req.headers['content-type'] || '';
    console.log('type',type);
    return 0 == type.indexOf('multipart/form-data');
}