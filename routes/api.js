// import {ZoneController} from '../controllers/ZoneController'
let express = require('express');
let router = express.Router();
let ZoneController = require('../controllers/ZoneController');
let MovieController = require('../controllers/MovieController')

router.get('/', function(req, res, next){
    
        const resouce = req.params.resource
    
        res.json({
            confirmation:'root',
            resource: resouce
        })
    })
    

router.get('/:resource', function(req, res, next){
    let resource = req.params.resource
    if (resource == 'zone'){
        console.log(req.query)
        ZoneController.finding(req.query, function(err, results){
            console.log('in callback')
            if (err){
                res.json({
                    confirmation:'fail',
                    message : err
                })
                return
            }
        
            res.json({
                confirmation:'success',
                results: results
            })
        })
    }
    else {
        console.log('movie')
        console.log(req.query)
        MovieController.finding(req.query, function(err, results){
            console.log('in callback')
            if (err){
                res.json({
                    confirmation:'fail',
                    message : err
                })
                return
            }
            res.json({
                confirmation:'success',
                results: results
            })
        })
    }
})

router.get('/:resource/:id', function(req, res, next){
    let resource = req.params.resource
    let id = req.params.id

    if (resource == 'zone'){
        ZoneController.findById(id, function(err, result){
            if (err){
                res.json({
                    // deal with confimation fail
                    confirmation: 'fail',
                    message: 'object not found in db'
                })
                return 
            }
            
            res.json({
                confirmation: 'success',
                result: result
            })
        })
    }
    else if (resource == 'movie'){
        console.log('movie')
        MovieController.find(null, function(err, result){
            if (err){
                res.json({
                    confirmation: 'fail',
                    message: 'movie load failed'
                })
            
                res.json({
                    confimation: 'success',
                    result: result
                })
            }
        })
    }
})

router.post('/:resource', function(req, res, next){
    let resource = req.params.resource;
    if (resource == 'zone'){
        ZoneController.create(req.body, function(err, result){
            if (err){
                res.json({
                    confirmation: 'fail',
                    message: err
                })
                return
            }
            
            res.json({
                confimation:'success',
                result: result
            })
        })
    }
})
module.exports = router