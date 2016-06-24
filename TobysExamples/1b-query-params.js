var express = require('express');
var app = express();

app.get('/', function (request, response) {
  console.log('All query parameters:', request.query);
  // request.query - in the url localhost:3000/?name=hi
  // request.params - directory related
  var name = request.query.name;
  response.send('Hello ' + name + '!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
