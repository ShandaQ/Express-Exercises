# Express

## Hello World and Basics

Follow the following tutorials to get a hello world express app started.

* http://expressjs.com/en/starter/installing.html
* http://expressjs.com/en/starter/hello-world.html

## Query Parameters

If a request url has query parameters in it, such as http://localhost:3000/?name=Arvin&age=6

You can access those query parameters as an object as `request.query`:

app.get('/', function(request, response) {
  console.log(request.query); // will print { name: 'Arvin', age: 6 }
});

## Routing

Express supports URL routing out of the box. That means to set up a handler for the /about URL, for example, you would write:

app.get('/about', function(request, response) {
  response.send('I will tell you all about me!');
});

As is the case for AngularJS, Express also allows route parameters. For example:

app.get('/:pageName', function(request, response) {
  var pageName = request.params.pageName;
  response.send('Hi, I will tell you everything I know about ' + pageName + '.');
});

The colon is use to denote a route parameter, and you can retrieve a route parameter via request.params.pageName.

## View Templates and Handlebars

Express allows you to easily use HTML view templates. There are various template formats to choose from. We will use handlebars. To do use it you will need the hbs module. Installing it using `npm install hbs --save`.

Then add the following to your Express app setup (anywhere in the code after the app object is created and before it starts to listen):

app.set('view engine', 'hbs');

By default, Express looks for view templates in the ./view directory of your app. Create this directory. The create a view template within it, say called hello.hbs. All handlebars templates will have a .hbs extension. A handlebars file uses the {{expression}} syntax just like AngularJS.

<h1>{{title}}</h1>

Once this is set up, you can use the response object's render method to render a template:

app.get('/hello', function(request, response) {
  response.render('hello', {
    title: 'Hello'
  })
});

You can use a layout.hbs file, which when used, will be use to wrap the content of each page.

## Redirects

The response object has a redirect method which lets you redirect the browser to a different URL. For example:

app.get('/', function(request, response) {
  response.redirect('/home');
});

## Serving Static Files

We call plain HTML, CSS, and JavaScript files static files, because they are static within the context of a dynamic application. To serve the static files with a directory with Express' web server, simply do:

app.use(express.static('public'));

This will serve all files in the public folder by their respective file names and paths.

## Body Parser and Forms

In traditional dynamic web applications (pre-SPA/AngularJS), dynamic content was submitted by users via web forms via a POST request. In order to read the data submitted via POST method. You will need to install the body-parser module: `npm install body-parser`. And set it up:

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

Now, set up a page with a form in it, setting its action attribute to the desired submit location and method to POST:

<form action="/submit" method="POST">
  <input type="text" name="name">
  <input type="number" name="age">
  <button type="submit">Submit</button>
</form>

When this form is submitted, it will send a POST request to the /submit URL. To handle this request, you would write

app.post('/submit', function(request, response) {
  // the post data is available in request.body
  var postData = request.body;
  // do the rest to handle this data
});

Now, assuming the body parser is set up correctly, the data from the form will be available in the body property of the request object.
