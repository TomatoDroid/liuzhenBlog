var mongoose = require('mongoose');
mongoose.connect('http://localhost/photo_app');

var schema = new mongoose.Schema({
    name:String,
    path:String
});

module.exports = mongoose.model('Photo',schema);