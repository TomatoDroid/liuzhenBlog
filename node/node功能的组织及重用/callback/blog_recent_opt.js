// 限制回调的嵌套层级，
// 把每一层的回调嵌套的处理做成命名函数，虽然表示相同逻辑的所用的代码变多了，但是利于维护，测试，以及重构

// 减少中间函数嵌套的例子
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    getTitle(res);
}).listen(8080,'127.0.0.1');

function getTitle(res){
    fs.readFile('./titles.json',function(err,data){  
        if(err){
            hadError(err,res);
        }else{
            getTemplate(JSON.parse(data.toString()),res);
        }
    });
}

function getTemplate(title,res){
    fs.readFile('./template.html',function(err,data){
        if(err){
            hadError(err,res);
        }else{
            formatHtml(title,data.toString(),res);
        }
    });
};

function formatHtml(title,tmpl,res){
    var html = tmpl.replace('%',title.join('</li><li>'));
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(html);
};  

function hadError(err,res){
    console.log(err);
    res.end('Server Error');
}