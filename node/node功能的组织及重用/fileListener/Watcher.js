var events = require('events'),
    util = require('util');
var fs = require('fs'),
    watchDir = './watch',
    processedDir = './done';    

function Watcher(watchDir,processedDir){
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

util.inherits(Watcher,events.EventEmitter);

Watcher.prototype.watch = function(){
    var watcher = this;
    fs.readdir(watchDir,function(err,files){
        if(err) throw err;
        for(var index in files){
            watcher.emit('process',files[index]);
        }
    });
}

Watcher.prototype.start = function(){
    var watcher = this;
    // 当目录中有使其能发生时，会触发watch事件
    fs.watchFile(watchDir,function(){
        watcher.watch();
    });
}

var watcher = new Watcher(watchDir,processedDir);
watcher.on('process',function process(file){
    var watchFile = this.watchDir+'/'+file;
    var processedDir = this.processedDir+'/'+file.toLowerCase();
    fs.rename(watchFile,processedDir,function(err){
        if(err) throw err;
    });
});

watcher.start();