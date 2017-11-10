// import {Zone} from '../models/Zone'
// controller are meant to execute specific to the resources

let Movie = require('../models/Movie')


// AIzaSyDKHXaaZZmXiTBx_jIXupCXZavq06jT614
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCUN5KnYTMyH2ox8zCv0Opt2MWfT4f4Ca4'
  });


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
            return
        })
    },

    findAll : function(params, callback){
        console.log(params)
        Movie.find({title:'180'}, function(err, movies){
            // error always first
            // payload second
            if (err){
                callback(err, null)
                return
            }
            
            callback(null, movies)
            return
        })
    },

    saveOneMovie : function (movie, callback){
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
            if(key == 'locations')
                continue
            else
                singleMovie[key] = value
        }
        let address = movie['locations']
        if(address != ''){
            console.log('address', address)        
            googleMapsClient.geocode({
                address: address
                }, 
            function(err, response) {
                // console.log(response)                
                let status = response.status
                // console.log(status)
                // if(status == 200)
                //     console.log('hi OKOKOK')
                // console.log(err)
                if (!err) {
                    result = response.json.results;
                    // console.log('result')
                    // console.log(result)
                    // console.log('typeof')
                    // console.log(typeof(result))
                    // console.log(result.length)
                    if(result.length==0){
                        err_str = 'location couldn\'n be retrived by address'
                        console.log(err_str)
                        callback(err_str, null)
                        return
                    }

                    // console.log(response.json.results[0].geometry)
                    location = result[0].geometry.location 
                    lat = result[0].geometry.location.lat
                    lng = result[0].geometry.location.lng
                    let locations = [{address:address, coord:{lat:lat, lng:lng}}]
                    // console.log('locations')
                    // console.log(locations)
                    singleMovie['locations'] = locations
                    // console.log('before saving to db in save one movie')
                    //console.log(singleMovie)
                    Movie.create(singleMovie, function(err, result){
                        if (err){
                            console.log('error', err)
                            callback(err, null)
                            return
                        }
                        callback(null,'inserted')
                        return
                    })
                }
                else{
                    callback('error', null)
                    return
                }
            });
        }
    },

    getMovieName : function (params, callback){
        Movie.distinct('title', function(err, results){
            if(err)
                callback(err, null)
            console.log(results)
            callback(null, results)
            return
        })
    },

    geoCodeTest: function(movie, callback){
        let address = movie['locations']
        console.log('address is ' + address)
        googleMapsClient.geocode({
            address: address
        }, function(err, response){
            console.log('here')
            // console.log(response)
            //console.log(response.json.results[0].geometry)
            callback('fail', 'test fail')
            return
        })
    }

    // saveMovieToMongo : function(movie, callback){
    //     saveOneMovie(movie, function(err, result){
    //         if(err){
    //             callback(err, null)
    //             return
    //         }
    //         movie = result        
    //         callback(null, '123')
    //     })
    // }

}

function newFunction() {
    return { type: String, default: '' };
}
