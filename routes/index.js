var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.ulencoded({extended: false});
// could use one line instead: var router = require('express').Router();
// var tweetBank = require('../tweetBank');
var Sequelize = require('sequelize');
var Index = require('../models/index');
var User = Index.User;
var Tweet = Index.Tweet;
//home page
router.get('/', function (req, res) {
  var userTweets;
  Tweet.findAll({ include: [ User ] }).then(function(tweets){
    console.log(tweets);
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
  })

});

//getting all tweets from user
router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  // var list = tweetBank.find( {name:name} );
  //console.log(list);

  User.findAll({ include: [ Tweet ], where: {name:name} }).then(function(user){
    console.log(user[0].Tweets);
    //render here 
    res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: user[0].Tweets, name:name} )   
  })

});

//get a single tweet
router.get( '/users/:name/tweets/:id', function (req, res) {
  var name = req.params.name;
  var id = Number(req.params.id);
  console.log(id);
  //var list = tweetBank.find({id:id});
  console.log("this is the list", list);
  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list, name:name })
});

router.post('/submit', urlEncodedParser, function(req, res) {
   Tweet.create
   console.log(req.body);
   var name = req.body.name;
   var text = req.body.text;
   res.redirect('/');
 });



// router.get( '/users/:name/tweets/:id', function (req, res) {
//   var name = req.params.name;
//   var id = req.params.id; 
//   var tweets = tweetBank.list();
//   var list = tweetBank.find( {id:id} );
//   res.render('index', { title: 'Twitter.js - Posts by '+id, name:name, tweets: tweets} )
// });


module.exports = router;





