var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
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

app.get('/projects', function (req, res) {
    res.render('projects', {
        name: "brochures"
    });
});

//__________________________________________
//These are the URLS that users will visit
//localhost:3000/misc/mlk_tshirt
//localhost:3000/misc/wpx_tshirt

//This is the route to the project page
//:slug is a variable
app.get("/tradeshows/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('tradeshows', {
        project: projectData
    });
});

app.get("/misc/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('misc', {
        project: projectData
    });
});

app.get("/brochures/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('brochures', {
        project: projectData
    });
});

app.get("/invitations/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('invitations', {
        project: projectData
    });
});

app.get("/logos/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('logos', {
        project: projectData
    });
});

app.get("/annuals/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('annuals', {
        project: projectData
    });
});

//define(function (require) {
//Define the header and footer partials for the Handlebars
//User these partials as {{>header}} anywhere in the templates
//    var header = Handlebars.compile(require("text!templates/header.html"));
//    Handlebars.registerPartial('header', header);
//
//    var footer = Handlebars.compile(require("text!templates/footer.html"));
//    Handlebars.registerPartial('footer', footer);
//});


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
        name: "MLK Day sweatshirt",
        image: "mlk_illus.png",
        desc: "Design created for a sweatshirt given to Williams employees participating in Tulsa's Martin Luther King Day parade.",
        cat: "MISCELLANEOUS"
    },
    {
        slug: "wpx_tshirt",
        name: "WPX Family Picnic Tee",
        image: "WPX_Picnic_Tee.jpg",
        desc: "T-shirt designed for a WPX employee event at the Tulsa Drillers' new ballpark",
        cat: "MISCELLANEOUS"
    },
    {
        slug: "wpx_vehiclewrap",
        name: "WPX Vehicle Wrap",
        image: "Vehicle_Wrap.jpg",
        desc: "When the WPX brand was launched in 2012, I designed the wrap for the company's trucks that ran on compressed natural gas.",
        cat: "MISCELLANEOUS"
    },
    {
        slug: "wpx_tradeshow",
        name: "Williams Tradeshow Display",
        image: "Tradeshow1.jpg",
        desc: "Popup display created for Williams' Midstream group to use at industry tradeshows. It needed to be a small, quick-to-assemble display that accommodated a tv monitor.",
        cat: "TRADE SHOWS"
    },
    {
        slug: "annual_enrollment",
        name: "Williams Benefits Brochure",
        image: "Health_Care_Broch.jpg",
        desc: "Part of Williams' annual benefits enrollment rollout, this brochure was designed to let employees and retirees know how to get the most from their healthcare benefits.",
        cat: "BROCHURES"
    },
    {
        slug: "campfire_broch",
        name: "Campfire USA brochure",
        image: "Camp_Fire_Brochure.jpg",
        desc: "Pro bono tri-fold brochure created for Camp Fire USA while serving on the Green Country Council's PR Committee.",
        cat: "BROCHURES"
    },
    {
        slug: "worldchallenge_invite",
        name: "Williams World Challenge invitation",
        image: "World_Challenge_Invite.jpg",
        desc: "Invitation and custom golf ball sleeve created for The Williams World Challenge. Williams partnered with the Tiger Woods Foundation, which benefitted underprivileged kids, and was a major sponsor for several years.",
        cat: "INVITATIONS"
    },
    {
        slug: "rigmosaic_invite",
        name: "Rig Mosaic invitation",
        image: "RigMosaicInvite.jpg",
        desc: "Invitation created for the unveiling of a mosaic commissioned by Williams.",
        cat: "INVITATIONS"
    },
    {
        slug: "stpats5k_logos",
        name: "St. Patrick's Day 5k logo",
        image: "St_Patricks_Day_5k.jpg",
        desc: "Logo designed for an annual 5k race in Tulsa.",
        cat: "LOGOS"
    },
    {
        slug: "pacific_logos",
        name: "Team Williams MS150 logo",
        image: "PacCon_logo.png",
        desc: "Logo designed for an annual 5k race in Tulsa.",
        cat: "LOGOS"
    },
    {
        slug: "minuteman_logos",
        name: "Minuteman Exploration logo",
        image: "Minuteman_Logo.png",
        desc: "Logo designed for WPX Energy.",
        cat: "LOGOS"
    },
    {
        slug: "WPX_annual",
        name: "2013 WPX Energy Annual Report",
        image: "WPX_Annual_Report2013.jpg",
        desc: "10k wrap for WPX Energy's annual report to its shareholders. Book was perfect bound and printed 4-color process for the wrap and one color on the 10k.",
        cat: "ANNUAL REPORTS"
    }
];




//
//jQuery(document).ready(function ($) {
//
//  $('#checkbox').change(function(){
//    setInterval(function () {
//        moveRight();
//    }, 3000);
//  });
//  
//	var slideCount = $('#slider ul li').length;
//	var slideWidth = $('#slider ul li').width();
//	var slideHeight = $('#slider ul li').height();
//	var sliderUlWidth = slideCount * slideWidth;
//	
//	$('#slider').css({ width: slideWidth, height: slideHeight });
//	
//	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//	
//    $('#slider ul li:last-child').prependTo('#slider ul');
//
//    function moveLeft() {
//        $('#slider ul').animate({
//            left: + slideWidth
//        }, 200, function () {
//            $('#slider ul li:last-child').prependTo('#slider ul');
//            $('#slider ul').css('left', '');
//        });
//    };
//
//    function moveRight() {
//        $('#slider ul').animate({
//            left: - slideWidth
//        }, 200, function () {
//            $('#slider ul li:first-child').appendTo('#slider ul');
//            $('#slider ul').css('left', '');
//        });
//    };
//
//    $('a.control_prev').click(function () {
//        moveLeft();
//    });
//
//    $('a.control_next').click(function () {
//        moveRight();
//    });
//
//});




//var page1 = Backbone.View.extend({
//    template: Handlebars.compile(require("text!templates/page1.html")),
//    render: function () {
//        this.$el.html(_self.template());
//        $("body .main").html(_self.$el);
//        
//header HTML is available inside $el of this view
//$header = this.$(".header");
//    }
//});



app.get('/resume', function (req, res) {
    res.render('resume', {
        name: "janet"
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        name: "janet"
    });
});

app.use(express.static("public"));
app.listen(3000);