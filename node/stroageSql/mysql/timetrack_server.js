var http = require('http');
var work = require('./lib/timetrack');
var mysql = require('mysql');
// 连接mysql
var db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'node',
});

var server = http.createServer(function(req,res){
    switch(req.method){
        case 'POST':
            switch(req.url){
                case '/':
                    word.add(db,req,res);
                    break;
                case '/archive':
                    word.archive(db,req,res);
                    break;
                case '/delete':
                    word.delete(db,req,res);
                    break;
            }
            break;
        case 'GET':
            switch(req.url){
                case '/':
                    work.show(db,req,res);
                    break;
                case '/archived':
                    word.showArchived(db,res);
                    break;
            }
            break;
    }
});

db.query(
    "CREATE TABLE IF NOT EXISTS work ("
    +"id INT(10) NOT NULL AUTO_INCREMENT, "
    +"hours DECIMAL(5,2) DEFAULT 0, "
    +"date DATE, "
    +"archived INT(1) DEFAULT 0, "
    +"description LONGTEXT, "
    +"PRIMARY KEY(id))",
    function(err){
        if(err) throw err;
        console.log('Server started..');
        server.listen(3000,'127.0.0.1');
    }
);