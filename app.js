var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(function(req,res,next){
	//do logging here
   console.log("request", req.method, req.url, res.statusCode);
   //console.log("response", res);
   next();
})
// app.use(morgan('combined'));


app.get('/',function(req,res){
	res.send('Welcome')
})

app.get('/news',function(req,res){
	res.send('This is the news page')
})

app.get('/hello',function(req,res){
	res.send('Hello world')
})

app.get('/bye',function(req,res){
	res.send('say bye ')
})





app.listen(3000)
console.log('server listening')
































