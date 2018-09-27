var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect()
            .use(bodyParser())
            .use(function(req,res){
                // 注册用户
                console.log('Registered new user: '+req.body.username);
            })
            .listen(3000);