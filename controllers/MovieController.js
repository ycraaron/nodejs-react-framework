// import {Zone} from '../models/Zone'
// controller are meant to execute specific to the resources

let Movie = require('../models/Movie')

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDKHXaaZZmXiTBx_jIXupCXZavq06jT614'
  });


function saveSingleMovie(movie, callback){
    let singleMovie = 
    {
        actor_1:'',
        actor_2:'',
        actor_3:'',  
        director:'',
        locations:[],
        production_company:'', 
        release_year:'', 
        title:'',
        writer:''
    }
    for(let key in movie){
        let value = movie[key]
        if(key == 'locations'){
            if(value == '')
                continue
        }
        else{
            singleMovie[key] = value
        }
        // console.log(singleMovie)
        let address = movie['locations']
        // console.log(value)    
        if(address != ''){
            googleMapsClient.geocode({
                address: address
                }, function(err, response) {
                if (!err) {
                    result = response.json.results;
                    lat = result[0].geometry.location.lat
                    lng = result[0].geometry.location.lng
                    let locations = [{address:address, coord:{lat:lat, lng:lng}}]
                    singleMovie['locations'] = locations
                    console.log('callback in load single movie')
                    console.log(singleMovie)
                    callback(singleMovie)
                }
            });
        }
    }
//console.log(singleMovie)
}

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
        saveSingleMovie(movie, function(result){
            movie = result        
            Movie.create(movie, function(err, result){
                if (err){
                    console.log('error', err)
                    callback('error', null)
                }
                callback(null,'inserted')
            })
        })
    }

}
function newFunction() {
    return { type: String, default: '' };
}
