var express = require('express');
var app = express();

var fs = require('fs');

// needed to the app.post method/function
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// needed for the templates files
app.set('view engine', 'hbs');

// need for the publice dirtory which houses the css and or javacscript files that the templates files will be using
app.use(express.static('public'));

app.get("/", function(request, response){
  response.redirect('/home-page');
});

app.get('/home-page', function(request, response) {
  response.render("home-page");
});

app.get('/forms', function(request, response) {
  response.render("forms");
});


app.get('/:pageName', function(request, response) {
  var pageName = request.params.pageName;

  fs.access('./pages/' + pageName + '.txt', fs.F_OK, function(err){
    if(err){
      // page doesnt exist, so display the placeholder.hbs
      response.render("placeholder.hbs");
      return;
    }
    // response.send("ok");
    // there was no error (the pageName.txt file exist), read the contents of the file
    fs.readFile("./pages/"+ pageName + ".txt", function(err, data){
      // read the contents of the file and push contecnts to home-page.hbs
      if(err){
        console.log(err);
        response.render("placeholder.hbs");
        return;
      }
      response.send("ok");
    });

  });
});
  // response.render("/placeholder",{
  //   pageName: pageName
  // });


//when use adds a new page
app.post('/submit', function(require, response){
  var data = require.body;
  console.log(data);
  var dataString = data.name + "\n" + data.message + "\n\n";
console.log(dataString);
 // fileName = pageName || topic
  fs.writeFile("pages/" +data.name + ".txt", dataString, function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log(dataString);
  });
  response.redirect('/home-page');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
