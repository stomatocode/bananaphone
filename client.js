var dotenv  = require('dotenv');
var twilio  = require('twilio');
var gpio    = require('pi-gpio');
var restify = require('restify');

// Made using Restify.js: http://mcavage.me/node-restify/#server-api

// test server code
//
// function respond(req, res, next) {
//   res.send('hello ' + req.params.name);
//   next();
// }
//
// var server = restify.createServer();
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);
//
// server.listen(8080, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });


// pre function: executes before routing occurs

// server.pre(function(req, res, next) {
//   req.headers.accept = 'application/json';  // screw you client!
//   return next();
// });
