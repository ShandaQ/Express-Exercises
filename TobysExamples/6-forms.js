var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.redirect('/form');
});

app.get('/form', function(request, response) {
  response.render('form', {
    title: 'Fill this out',
    content: 'Hello, world!'
  });
});

app.post('/submit', function(request, response) {
  var data = request.body;
  console.log(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
