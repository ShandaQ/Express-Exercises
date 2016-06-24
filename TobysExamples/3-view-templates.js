var express = require('express');
var app = express();
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('hello.hbs', {
    title: 'Hello',
    content: 'Hello, world!'
  });
});

app.get('/about', function (req, res) {
  res.render('about.hbs', {
    title: 'About',
    content: 'About page!'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
