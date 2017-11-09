let mongoose = require('mongoose');

//keep schema as clean as possible
let MovieSchema = new mongoose.Schema({
    actor_1:{type:String, default:''},
    actor_2: {type:String, default:''},
    actor_3: {type:String, default:''},  
    director: {type:String, default:''},
    locations: {type:Array, default:[]},
    production_company:{type:String, default:''}, 
    release_year:{type:String, default:''}, 
    title: {type:String, default:''},
    writer: {type:String, default:''}
});

module.exports = mongoose.model('MovieSchema', MovieSchema, 'MovieSchemas');