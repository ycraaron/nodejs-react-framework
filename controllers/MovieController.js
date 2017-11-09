// import {Zone} from '../models/Zone'
// controller are meant to execute specific to the resources
let Movie = require('../models/Movie')

module.exports = {
    
    // name find not working
    // conflict to system reserved keyword?
    findByName : function(name, callback){
        console.log('calling aarontest')
        Movie.find({title:name}, function(err, movies){
            // error always first
            // payload second
            if (err){
                callback(err, null)
                return
            }
            callback(null, movies)
        })
    },

    findAll : function(params, callback){
        console.log(params)
        Movie.findOne(params, function(err, movies){
            // error always first
            // payload second
            if (err){
                callback(err, null)
                return
            }
            
            callback(null, movies)
        })
    },

    saveMovieToMongo : function(movie, callback){
        
        let zips = params['zipCodes']
        let zip = zips.split(',')
        let newZips = []
        
        zip.forEach(function(zipCode){
            newZips.push(zipCode.trim())
        })

        params['zipCodes'] = newZips

        console.log('creating movie')
        Movie.create(doc, function(err, result){
            if (err){
                callback(err, null)
                return
            }
            else
                callback(null, result)
        })
    }

}