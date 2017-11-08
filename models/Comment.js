let mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    body: {type:String, default:''},
    timestamp: {type:Date, default:Date.now},
    username: {type:String, default:''}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);