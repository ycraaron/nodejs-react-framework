// import {Zone} from '../models/Zone'
// controller are meant to execute specific to the resources
let Zone = require('../models/Zone')

module.exports = {

    // name find not working
    // conflict to system reserved keyword?
    finding : function(params, callback){
        Zone.find(params, function(err, zones){
            // error always first
            // payload second
            if (err){
                callback(err, null)
                return
            }
            
            callback(null, zones)
        })
    },

    findById : function(id, callback){
        Zone.findById(id, function(err,zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
        
    },
    create : function(params, callback){
        let zips = params['zipCodes']
        let zip = zips.split(',')
        let newZips = []
        
        zip.forEach(function(zipCode){
            newZips.push(zipCode.trim())
        })

        params['zipCodes'] = newZips

        Zone.create(params, function(err, zone){
            if (err) {
                callback(err, null)
                return
            }
            console.log("creating ")
            callback(null, zone)
        })
        
    },
    update : function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
        })
        
    },
    
    find : function(){
        
    }

}