var express = require('express');
var router = express.Router();

var Photo = require('../models/photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

var photos = [];
photos.push({
    name:'node.js Logo',
    path:'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
    name:'Ryan Speaking',
    path:'http://nodejs.org/images/ryan-speaker.jpg'
});

router.get('/',function(req,res,next){
    // res.render('photos',{
    //     title:'Photos',
    //     photos:photos
    // });
    Photo.find({},function(err,photos){
        if(err) return next(err);
        res.render('photos',{
            title:'Photos',
            photos:photos
        });
    });
});

router.get('/upload',function(req,res,next){
    res.render('upload',{
        title:'photo Upload'
    });
});

router.post('/upload',submit(router.get('photos')));

function submit(dir){
    return function(req,res,next){
        console.log(req.files);
        console.log('body--------',req.body);
        var img = req.files.photo.image;
        var name = req.body.photo.name || img.name;
        var path = join(dir,img.name);
        fs.rename(img.path,path,function(err){
            if(err)  return next(err);
            Photo.create({
                name:name,
                path:img.name
            },function(err){
                if(err) return next(err);
                res.redirect('/');
            });
        });
    }
}

router.get('./photo/:id/download',download());
function download(dir){
    return function(req,res,next){
        var id = req.params.id;
        Photo.findById(id,function(err,photo){
            if(err) return next(err);
            var path = join(dir,photo.path);
            // res.sendfile(path);
            res.download(path,photo.name+'.jpeg');
        });
    }
}
module.exports = router;
