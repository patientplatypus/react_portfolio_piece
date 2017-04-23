var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
var userSchema = require('../models/userSchema');


  router.post('/', function (req, res, next) {
    var user = new userSchema({
      username: req.body.username,
      password: req.body.password
    })
    user.save(function (err, post) {
      if (err) { return next(err) }
      res.json(201, post)
    })
  })

  router.post('/ponys', function(req,res,next){
    var url = 'http://ponyfac.es/api.json/tag:'+req.body.feeling

    request(url, function(err, response){
        if(err){
          console.error("pony router had an error", err);
        }else{
          res.json(response);
        }
    })

  })




module.exports = router;
