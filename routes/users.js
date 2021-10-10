var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController');


router.post('/', function(req, res, next) {
 
  const token = AuthController.generateAccessToken((req.body));
  var retunObj = {
    status:200,
    response:{
      id:1,
      token:token
    }
  
  }
  res.status(200).json(retunObj);
 
});

module.exports = router;
