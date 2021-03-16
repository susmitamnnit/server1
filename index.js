const express=require('express');
const app =express();
var http= require('http').Server(app);

const mongoose= require('mongoose');
url='mongodb://127.0.0.1:27017/MyDb';
mongoose.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    // db = client.db(d)
    console.log(`Connected MongoDB`)
    
  })

  mongoose.Promise =global.Promise;
  module.exports= {
      User:require('./models/user.model')
  };

  app.use(jwt());

app.get('/',(req,res)=>{
    res.send("hello world");
})

const port=3000;
var server= http.listen(port,function(){
    console.log("server started to listen on",port);
});