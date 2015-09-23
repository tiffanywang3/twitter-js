var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name:name} );
  //console.log(list);
  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list, name:name} )
});

router.get( '/users/:name/tweets/:id', function (req, res) {
  var name = req.params.name;
  var id = Number(req.params.id);
  console.log(id);
  var list = tweetBank.find({id:id});
  console.log("this is the list", list);
  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list, name:name })
});


// router.get( '/users/:name/tweets/:id', function (req, res) {
//   var name = req.params.name;
//   var id = req.params.id; 
//   var tweets = tweetBank.list();
//   var list = tweetBank.find( {id:id} );
//   res.render('index', { title: 'Twitter.js - Posts by '+id, name:name, tweets: tweets} )
// });


module.exports = router;