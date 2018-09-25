var connect = require('connect');
var api = connect().use(users).use(pets).use(errorHandler);
var app = connect().use(hello).use('/api',api).use(errorPage).listen(3000);

function hello(req,res,next){
    if(req.url.match(/^\/hello/)){
        res.end('Hello middleware\n');
    }else{
        next();
    }
}

var db = {
    users:[
        {name:'tobi'},
        {name:'loki'},
        {name:'jane'},
    ]
}

function users(req,res,next){
    var match = rqe.url.match(/^\/users\/(.+)/);
    if(match){
        
    }
}