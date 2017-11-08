// import {Zone} from '../models/Zone'
// controller are meant to execute specific to the resources
let Movie = require('../models/Movie')

module.exports = {

    // name find not working
    // conflict to system reserved keyword?
    finding : function(params, callback){
        Movie.find(params, function(err, zones){
            // error always first
            // payload second
            if (err){
                callback(err, null)
                return
            }
            
            callback(null, zones)
        })
    },

    findById : function(name, callback){
        Movie.find({"title": name}, function(err,zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    }
}