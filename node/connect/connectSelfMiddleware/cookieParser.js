var connect = require('connect');
var cookieParser = require('cookie-parser');

var app = connect()
            .use(cookieParser('tobi is a cool ferret'))
            .use(function(req,res){
                console.log('cookies-----',req.cookies);
                console.log('signedCookies-------',req.signedCookies);
                res.end('hello CookieParser\n');
            })
            .listen(3000);