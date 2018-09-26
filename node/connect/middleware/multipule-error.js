var connect = require('connect');
var api = connect().use(users).use(pets).use(errorHandler);
var app = connect().use(hello).use('/api',api).use(errorPage).listen(3000);

function hello(req,res,next){
    if(req.url.match(/^\/hello/)){
        console.log(req.url.match(/^\/hello/));
        res.end('Hello Middleware\n');
    }else{
        // var err = new Error('路径不对');
        // next(err);
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
    var match = req.url.match(/^\/user\/(.+)/);
    if(match){
        var boolean = false;
        console.log('match',match);
        for(var i in db.users){
            if(db.users[i].name === match[1]){
                user = db.users[i].name;
                console.log('user',user);
                boolean = true;
                break;
            }else{
                boolean = false;
            }
        }
        if(boolean){
            console.log('boolean',boolean);
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(user));
        }else{
            var err = new Error('User not Found');
            err.notFound = true;
            next(err);
        }
    }else{
        console.log('pet');
        next();
    }
}

function pets(req,res,next){
    console.log('req.url.match(/^\/pet\/(.+)/)---',req.url.match(/^\/pet\/(.+)/));
    if(req.url.match(/^\/pet\/(.+)/)){
        foo();
    }else{
        next();
    }
}

function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.setHeader('Content-Type','application/json');
    if(err.notFound){
        res.statusCode = 404;
        res.end(JSON.stringify({error:err.message}));
    }else{
        res.statusCode = 500;
        res.end(JSON.stringify({error:'Internal Server Error'}));
    }
}
function errorPage(err,req,res,next){
    res.setHeader('Content-Type','application/json');
    res.statusCode = 404;
    res.end({error:'Not found Page'});
}