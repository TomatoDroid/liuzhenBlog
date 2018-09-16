// 减少if..else引起的嵌套：
//     尽早从函数中返回错误

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    getTitle(res);
}).listen(8088,'127.0.0.1');

function getTitle(res){
    fs.readFile('./titles.json',function(err,data){
        if(err) return hadError(err,res);
        getTemplate(JSON.parse(data.toString()),res);
    });
}

function getTemplate(titles,res){
    fs.readFile('./template.html',function(err,data){
        if(err) return hadError(err,res);
        formatHtml(titles,data.toString(),res);
    });
}

function formatHtml(titles,tmpl,res){
    var html = tmpl.replace('%',titles.join('</li><li>'));
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
}

function hadError(err,res){
    console.log(err);
    res.end(err);
}