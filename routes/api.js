let express = require('express');
let router = express.Router();
let MovieController = require('../controllers/MovieController')
const fs = require('fs');

router.get('/', function(req, res, next){
    
        const resouce = req.params.resource
        res.json({
            confirmation:'root',
            resource: resouce
        })
    })
    

router.get('/:resource', function(req, res, next){
    let resource = req.params.resource
    if (resource == 'save-movie-to-mongo'){
        // let rawData = fs.readFileSync('./src/data/movie-part1.json')
        // let movies = JSON.parse(rawData)
        // for(let i = 0; i < movies.length; i=i+1){
        //     console.log('i====' + i)
        //     MovieController.saveOneMovie(movies[i], function(err, results){
        //         if(!err){
        //             console.log("movie " + i + " inserted")
        //         }
        //         else{
        //             console.log('error happend')
        //             console.log(err)                    
        //         }
        //     })
        // }
        // res.json({
        //     confirmation:'success',
        //     results: 'finished'
        // })
        // return
        res.json({
            confirmation:'success',
            results: 'api call disabled'
        })
    }
    else if(resource == 'load-all-markers'){
        console.log('start loading markers')
        MovieController.findAll(req.params,function(err, results){
            if(!err){
                console.log('markers loaded')
                res.json({
                    confimation: 'success',
                    results:results
                })
                return
            }
            else
                res.json({
                    confimation: 'fail',
                    results:'fail'
                })
        })
    }
    else if (resource == 'load-movie-names'){
        console.log('start loading movie names')
        MovieController.getMovieName(req.params, function(err, results){
            if(!err){
                console.log('movie names loaded')
                res.json({
                    confirmation: 'success',
                    results: results
                })
                return
            }
            else
                res.json({
                    confimation: 'fail',
                    results:'fail'
                })
                return
        })
    }
})

router.get('/:resource/:name', function(req, res, next){
    let resource = req.params.resource
    let name = req.params.name
    if (resource == 'movie'){
        MovieController.findByName(name, function(err, result){
            if (err){
                res.json({
                    confirmation: 'fail',
                    message: err
                })
            }
            res.json({
                confimation: 'success',
                result: result
            })
        })
    }
})


router.post('/:resource', function(req, res, next){
    let resource = req.params.resource;
    if (resource == 'movie'){
        MovieController.create(req.body, function(err, result){            
            res.json({
                confimation:'success',
                result: result
            })
        })
    }
})
module.exports = router