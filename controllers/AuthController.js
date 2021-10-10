
const jwt = require('jsonwebtoken');

exports.generateAccessToken = function(req, res){
       
         var username = req.username;
         console.log("I am in controller",(req.username));
         return jwt.sign({username}, "09f26e402586e2faa8da4c98a35f1b20d6b033c60", {expiresIn: '1h',algorithm: 'HS256' });
  }
