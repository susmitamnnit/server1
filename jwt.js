const expressJwt = require('express-jwt');
const { deleteOne } = require('./models/user.model');
module.exports= jwt;
function jwt(){
    
    return expressJwt({secret,isRevoked}).unless({
        path:[
            'user/authentication',
            'user/register',
        ]
    })
}

async function isRevoked(req,payload,done){
    
}