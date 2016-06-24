var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.redirect('/home');
});

app.get('/home', function(request, response) {
  response.send('Welcome to the home page!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
