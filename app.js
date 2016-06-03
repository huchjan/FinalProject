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

//app.get('/projects', function (req, res) {
//    res.render('projects', {
//        name: "brochures"
//    });
//});
//__________________________________________
//These are the URLS that users will visit
//localhost:3000/projects/mlk_tshirt
//localhost:3000/projects/wpx_tshirt

//This is the route to the project page
//:slug is a variable
app.get("/projects/:slug", function(req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('projects', {
        project: projectData
    });
});

//get the project data based on the slug
function getProjectBySlug(slug) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].slug == slug) {
            return projects[i];
        }
    }
}

var projects = [
    {
        slug: "mlk_tshirt",
        name: "MLK Day sweatshirt design",
        image: "mlk_illus.png",
        desc: "Sweatshirt design for Williams employees participating in Tulsa's Martin Luther King Day parade.",
        cat: "Miscellaneous"
    },
    {
        slug: "wpx_tshirt",
        name: "WPX Family Picnic T-Shirt",
        image: "WPX_Picnic_Tee.jpg",
        desc: "Designed a t-shirt for this family picnic",
        cat: "misc"
    }
];

//app.get('/projects', function (req, res) {
//    res.render('projects', {
//        name: "brochures"
//    });
//});
//__________________________________________


app.get('/resume', function (req, res) {
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