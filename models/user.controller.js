const express= require('express');
const router =express.Router();
const userService= require('./user.service')

router.post('/register',register);
router.post('/authentication',authentication);


module.exports =router;

function authentication(req,res,next){
    userService.authenticate(res.body)
    .then(()=>res.json({}))
    .catch(err=> next(err))
}

function register(req,res,next){
    userService.create(res.body)
    .then(()=>res.json({}))
    .catch(err=> next(err))    

}