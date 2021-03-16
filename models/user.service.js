const User = index.User;
const bcrypt = require('bcryptjs');

module.exports= {
    create,
    authenticate,
}

async  function authenticate({username,password}){
 const user = await User.findOne({username});
 if(user && bcrypt.compareSync(password,user.hash)){
     const {hash,...userWithoutHash}=user.toObject();
     const token= jwt.sign({sub:user.id},secret,{
         expriresIn:'4d'
     });
     return {
         ...userWithoutHash,
         token
     }
 }
}

async function create(userParam){

    if(await user.findOne({username:userParam.username})){
        throw "Username alreay taken"
    }

    const user= new User(userParam);
    if(userParam.password){
        user.hash =bcrypt.hashSync(userParam.password,10);
    }
    await user.save();

}