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
    if (resource == 'movie'){
        MovieController.aarontest(req.query, function(err, results){
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