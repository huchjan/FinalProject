var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {
        name: "janet"
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        name: "janet"
    });
});

app.get('/projects/:name', function (req, res) {
    res.render('projects', {
        name: "janet"
    });
});

app.get('/resume/:name', function (req, res) {
    res.render('resume', {
        name: "janet"
    });
});

app.get('/contact/:name', function (req, res) {
    res.render('contact', {
        name: "janet"
    });
});

app.use(express.static("public"));
app.listen(3000);