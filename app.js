var express = require('express');
var app = express();
var morgan = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser')

var routes = require('./routes/');
app.use('/', routes);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });



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