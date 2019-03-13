var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const getPasswordByName = (name) => {
  return {password: '1'}
}

router.post('/login', function(req, res, next){
  const { userName, password } = req.body
  if(userName){
    const userinfo = password ? getPasswordByName(userName) : ''
    if(!userinfo || !password || userinfo.password !== password){
      res.status(401).send({
        code:401,
        mes:'userName or password is wrong',
        data:{}
      })
    }else{
      res.send({
        code:200,
        mes:'success',
        data:{
          token: jwt.sign({name: userName},'abcd',{
            expiresIn:60
          })
        }
      })
    }
  }else{
    res.status(401).send({
      code:401,
      mes:'userName is empty',
      data:{}
    })
  }

})



module.exports = router;
