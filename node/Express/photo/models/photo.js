var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node',{ useNewUrlParser: true } );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

var schema = new mongoose.Schema({
    name:String,
    path:String
});

module.exports = mongoose.model('Photo',schema);