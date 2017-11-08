let mongoose = require('mongoose');
mongoose.set('debug', true);

//keep schema as clean as possible
let ZoneSchema = new mongoose.Schema({
    name: {type:String, default:''},
    zipCodes:{type:Array, default:[]},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);