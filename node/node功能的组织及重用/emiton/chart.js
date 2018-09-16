var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {}
channel.subscriptions = {}

channel.on('join',function(id,client){
    var welcome = 'Welcome!\n'+'Guests online: '+this.listeners('broadcast').length;
    client.write(welcome+'\n');
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId,message){
        if(id != senderId){
            this.clients[id].write(message);
        }
    }
    this.on('broadcast',this.subscriptions[id]);
});

channel.on('leave',function(id){
    channel.removeListener('broadcast',this.subscriptions[id]);
    channel.emit('broadcast',id,id+' has left the chat.\n');
});

channel.on('shutdown',function(id){
    channel.emit('broadcost','','Chat has shut down./n');
    channel.removeAllListeners('broadcast');
});

channel.setMaxListeners(10);

var server = net.createServer(function(client){
    var id = client.remoteAddress + ':' + client.remotePort;
    channel.emit('join',id,client);

    client.on('data',function(data){
        data = data.toString();
        if(data === 'shutdown\r\n'){
            channel.emit('shutdown');
        }
        channel.emit('broadcast',id,data);
    });
    client.on('close',function(client){
        channel.emit('leave',id);
    });
});

server.listen(8888);