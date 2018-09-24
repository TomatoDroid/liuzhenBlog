var connect = require('connect');
connect()
    .use()
    .use('/admin',restrict)
    .use('/admin',admin)
    .use().listen(3000);
// 认证中间件
function restrict(req,res,next){
    // 授权
    var authorization = req.headers.authorization;
    if(!authorization) return next(new Error('Unauthorized'));

    var parts = authorization.split(' ');
    var scheme = parts[0];
    var auth = new Buffer(parts[1],'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    // 根据数据库中的记录查询认证信息的函数
    authenticateWithDatabase(user,pass,function(err){
        // 告诉分派器出错了
        if(err) next(err);
        next();
    });
}
// 显示管理面板的中间件
function admin(req,res,next){
    switch(req.url){
        case '/':
            res.end('try/users');
            break;
        case '/users':
            res.setHeaders('Content-Type','application/json');
            res.end(JSON.stringify(['tobi','loki','jane']));
            break;
    }
}