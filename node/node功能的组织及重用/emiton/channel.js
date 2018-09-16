var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();

channel.on('join',function(data){
    console.log('welcome! '+data);
});

channel.emit('join','liuzhen');