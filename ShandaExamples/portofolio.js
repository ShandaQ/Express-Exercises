var express = require('express');
var app = express();

// needed for reading/writting to files
var fs = require('fs');
var fileName = 'formMessage.txt';

// needed to the app.post method/function
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// needed for the templates files
app.set('view engine', 'hbs');

// need for the publice dirtory which houses the css and or javacscript files that the templates files will be using
app.use(express.static('public'));

// home page
app.get('/', function(req,res){
  res.render('home.hbs', {
    title: 'Home',
    content: 'This is the home page'
  });
});

// about page
app.get('/about', function(req,res){
  res.render('about.hbs', {
    title: 'About',
    content: 'This is the about page'
  });
});

// project page
app.get('/projects', function(req,res){
  res.render('projects.hbs', {
    title: 'Projects',
    content: 'This is the projects page'
  });
});


// contact me page
app.get('/contact', function(req,res){
  res.render('contact.hbs', {
    title: 'Contact Me',
    content: 'This is the contact form page'
  });
});

// thank you page
app.get('/thank-you', function(req,res){
  var name = req.query.name;
  res.render('thank-you.hbs', {
    title: 'Thank You ',
    content: 'This is the thank-you page',
    name: name
  });
});

// post information for the form to a txt file
app.post('/submit', function(req, res){
  var data = req.body;
var dataString = data.name + "\n" + data.message + "\n";
  fs.appendFile(fileName, dataString, function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log(data);
  });

  // passing the name the user entered on the form to the thank-you page as a query parameter, so that the name can be displayed on the thank you page
  res.redirect('/thank-you?name='+ data.name);

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
