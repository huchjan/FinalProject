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

app.get("/advertising/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/annuals/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/brochures/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/digital/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/tradeshows/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/misc/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/invitations/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
        project: projectData
    });
});

app.get("/logos/:slug", function (req, res) {
    //get the project data based on the requested slug
    var projectData = getProjectBySlug(req.params.slug);
    //render the "projects.handlebars" template using the project data
    res.render('project', {
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
        slug: "WPX_advertising",
        name: "Holiday ad for WPX Energy",
        image: "WPXchristmas_Ad.jpg",
        desc: "10k wrap for WPX Energy&rsquo;s annual report to its shareholders. Book was perfect bound and printed 4-color process for the wrap and one color on the 10k.",
        cat: "ADVERTISING",
        left: "../tradeshows/wpx_tradeshow",
        right: "../annuals/WPX_annual"
    },
    {
        slug: "WPX_annual",
        name: "2013 WPX Energy annual report",
        image: "WPX_Annual_Report2013.jpg",
        desc: "10k wrap for WPX Energy&rsquo;s annual report to its shareholders. Book was perfect bound and printed 4-color process for the wrap and one color on the 10k.",
        cat: "ANNUAL REPORTS",
        left: "../advertising/WPX_advertising",
        right: "../annuals/WCG_annual"
    },
     {
        slug: "WCG_annual",
        name: "Williams Communications Group annual report",
        image: "WCG_annual.jpg",
        desc: "Annual report for spinoff telecom company.",
        cat: "ANNUAL REPORTS",
        left: "WPX_annual",
        right: "../brochures/annual_enrollment"
    },
    {
        slug: "annual_enrollment",
        name: "Williams benefits brochure",
        image: "Health_Care_Broch.jpg",
        desc: "Part of Williams&rsquo; annual benefits enrollment rollout, this brochure was designed to let employees and retirees know how to get the most from their healthcare benefits.",
        cat: "BROCHURES",
        left: "../annuals/WCG_annual",
        right: "campfire_broch"
    },
    {
        slug: "campfire_broch",
        name: "Campfire USA brochure",
        image: "Camp_Fire_Brochure.jpg",
        desc: "Pro bono tri-fold brochure created for Camp Fire USA while serving on the Green Country Council&rsquo;s PR Committee.",
        cat: "BROCHURES",
        left: "annual_enrollment",
        right: "../digital/digital_graph"
    },
    {
        slug: "digital_graph",
        name: "WPX website graphic",
        image: "BoostingOurBbl_graph.jpg",
        desc: "Digital image showing WPX&rsquo;s oil production. Graph was created for the company&rsquo;s external website.",
        cat: "DIGITAL",
        left: "../brochures/campfire_broch",
        right: "../invitations/worldchallenge_invite"
    },
    {
        slug: "worldchallenge_invite",
        name: "Williams World Challenge invitation",
        image: "World_Challenge_Invite.jpg",
        desc: "Invitation and custom golf ball sleeve created for the Williams World Challenge. Williams partnered with the Tiger Woods Foundation, which benefitted underprivileged kids, and was a major sponsor for several years.",
        cat: "INVITATIONS",
        left: "../digital/digital_graph",
        right: "saenger_invite"
    },
     {
        slug: "saenger_invite",
        name: "Williams customer event invitation",
        image: "SaengerTheatreInvite.jpg",
        desc: "Invitation and RSVP created for a customer event at New Orleans&rsquo; historic Saenger Theatre.",
        cat: "INVITATIONS",
        left: "worldchallenge_invite",
        right: "nwp_invite"
    },
    {
        slug: "nwp_invite",
        name: "Northwest Pipeline anniversary invitation",
        image: "NWP_Invite.jpg",
        desc: "Postcard invitation for Northwest Pipeline&rsquo;s 50th anniversary event, which included an antique car show.",
        cat: "INVITATIONS",
        left: "worldchallenge_invite",
        right: "rigmosaic_invite"
    },
    {
        slug: "rigmosaic_invite",
        name: "Rig mosaic invitation",
        image: "RigMosaicInvite.jpg",
        desc: "Cover of an invitation created for a reception to honor the legacy of the energy industry in Tulsa with the unveiling of a glass mosaic mural commissioned by Williams.",
        cat: "INVITATIONS",
        left: "nwp_invite",
        right: "../logos/stpats5k_logos"
    },
    {
        slug: "stpats5k_logos",
        name: "St. Patrick&rsquo;s Day 5k logo",
        image: "St_Patricks_Day_5k.png",
        desc: "Logo designed for an annual 5k race in Tulsa.",
        cat: "LOGOS",
        left: "rigmosaic_invite",
        right: "pacific_logos"
    },
    {
        slug: "pacific_logos",
        name: "Pacific Connector logo",
        image: "PacCon_logo.png",
        desc: "Logo designed for Williams for a proposed 232-mile pipeline project that will provide natural gas to the pacific northwest and international markets.",
        cat: "LOGOS",
        left: "stpats5k_logos",
        right: "minuteman_logos"
    },
    {
        slug: "minuteman_logos",
        name: "Minuteman Exploration logo",
        image: "Minuteman_Logo.png",
        desc: "Logo designed for WPX Energy.",
        cat: "LOGOS",
        left: "pacific_logos",
        right: "mlk_tshirt"
    },
    {
        slug: "mlk_tshirt",
        name: "MLK Day sweatshirt",
        image: "mlk_illus.png",
        desc: "Design created for a sweatshirt given to Williams employees participating in Tulsa&rsquo;s Martin Luther King Day parade.",
        cat: "MISCELLANEOUS",
        left: "../logos/minuteman_logos",
        right: "wpx_tshirt"
    },
    {
        slug: "wpx_tshirt",
        name: "WPX Family Picnic tee",
        image: "WPX_Picnic_Tee.jpg",
        desc: "T-shirt designed for WPX employees for a family picnic at the Drillers&rsquo; ONEOK Field in downtown Tulsa, Oklahoma.",
        cat: "MISCELLANEOUS",
        left: "mlk_tshirt",
        right: "wecu_flyer"
    },
    {
        slug: "wecu_flyer",
        name: "Williams Employees Credit Union flyer and postcard",
        image: "WECU_flyer.jpg",
        desc: "Flyer and postcard created to promote WECU&rsquo;s Home Equity Line of Credit.",
        cat: "MISCELLANEOUS",
        left: "wpx_tshirt",
        right: "wpx_vehiclewrap"
    },
    {
        slug: "wpx_vehiclewrap",
        name: "WPX vehicle wrap",
        image: "Vehicle_Wrap.jpg",
        desc: "When the WPX brand was launched in 2012, I designed the wrap for the company&rsquo;s trucks that ran on compressed natural gas.",
        cat: "MISCELLANEOUS",
        left: "wecu_flyer",
        right: "../tradeshows/wpx_tradeshow"
    },
    {
        slug: "wpx_tradeshow",
        name: "Williams tradeshow display",
        image: "Tradeshow1.jpg",
        desc: "Pop-up display created for Williams&rsquo; Midstream group to use at industry tradeshows. It needed to be a small, quick-to-assemble display that accommodated a TV monitor.",
        cat: "TRADE SHOWS",
        left: "../misc/wpx_vehiclewrap",
        right: "../advertising/WPX_advertising"
    }
];



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
app.listen(process.env.PORT || 3000);