const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const schema= new Schema({
    username:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    emailId:{type:String,required:true},

});
schema.set('toJSON',{virtual:true});
module.exports= mongoose.model('User',schema);