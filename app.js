// var express = require('express')
// var app = express()
// var fs = require('fs')
// var mime = require('mime')
// var bodyParser = require('body-parser')

// var swig = require('swig')
// app.engine('html', swig.renderFile)
// app.set('view engine', 'html')
// app.set('views', process.cwd() + '/views')

// // static file middleware
// app.use(function(req, res, next) {
//   console.log(req.path)
//   var mimeType = mime.lookup(req.path)
//   fs.readFile('./public/' + req.path, function(err, fileBuffer) {
//     if(err) return next()
//     res.header('Content-Type', mimeType)
//     res.send(fileBuffer)
//   })
// })

// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(require('./routes'))











// app.listen(3000)





var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser')

var routes = require('./routes/');
app.use('/', routes);

//this sets up swig as our rendering engine
//swig module
//REWATCH REVIEW VIDEO!!!!! 
//this happens once at the beginning
var swig = require('swig');
//when you are asked to render an html file use swig.renderFile ==> (response.render)
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
//how to find files (again), response.render('something')
//--> /whatever/the/views/directory/is/something 
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });

//setting middleware

app.use(function(req,res,next){
  //do logging here
  console.log("request", req.method, req.url, res.statusCode);
  //console.log("response", res);
  next();
})
// app.use(morgan('combined'));




// app.get('/',function(req,res){
//     var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// app.get('/news',function(req,res){
//     res.send('This is the news page')
// })

// app.get('/hello',function(req,res){
//     res.send('Hello world')
// })

// app.get('/bye',function(req,res){
//     res.send('say bye ')
// })

// app.get('/*', function(req, res) {
//     var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     swig.renderFile(__dirname + '/views/index.html', {people: people}, function (err, output) {
//         console.log(output);
//         res.send(output);

//     });

// })

app.listen(3000)
console.log('server listening')