var connect = require('connect');
var router = require('./middleware/router');

var routes = {
    GET:{
        '/users':function(req,res){
            res.end('tobi,loki,ferrt');
        },
        '/user/:id':function(req,res,id){
            res.end('user: '+id);
        }
    },
    DELETE:{
        '/user/:id':function(req,res,id){
            res.end('delete user: '+id);
        }
    }
}

connect().use(router(routes)).listen(3000);