var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get('/about', function(request, response) {
  response.send('This is just an example app demonstrating simple routing in express.');
});

/*
Example:
app.get('/originization/:orgId/client/:clientId/project/:projectId')
*/

app.get('/:pageName', function(request, response) {
  var pageName = request.params.pageName;
  response.send('Hi, I will tell you everything I know about ' + pageName + '.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
