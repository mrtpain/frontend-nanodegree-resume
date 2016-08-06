var bio = {
    "name": "Tyler Pena",
    "role": "Web Developer",
    "contacts": {
        "mobile": "925-813-2796",
        "email": "tylerpena@me.com",
        "github": "mrtpain",
        "twitter": "@mrtpain_",
        "location": "Oakley, CA"
    },
    "welcomeMessage": "Welcome to my resume where you can read all about my awesome ass skills. I've been developing for several years now and am excelling at a crazy pace. So crazy that before I finish projects, I already want to restart and build a newer, faster and better one.",
    "skills": ["HTML5", "CSS3", "SASS", "jQuery", "JavaScript", "Craft CMS", "Foundation", "Bootstrap", "Gulp", "Twig", "Grunt"],
    "biopic": 'images/me.jpg'
};

// DISPLAY BIO INFORMATION IN AN OBJECT THAT HOLDS A FUNCTION
bio.display = function() {
    // APPEND NAME, ROLE, PIC, AND WELCOME MESSAGE TO HEADER
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#header').append(formattedPic);
    $('#header').append(formattedWelcome);

    // APPEND CONTACTS TO HEADER
    var formattedMobile = HTMLmobile.replace("%data%", bio['contacts'].mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio['contacts'].email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio['contacts'].twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio['contacts'].github);
    var formattedLocation = HTMLlocation.replace("%data%", bio['contacts'].location);
    $('#topContacts, #footerContacts').append(formattedMobile);
    $('#topContacts, #footerContacts').append(formattedEmail);
    $('#topContacts, #footerContacts').append(formattedTwitter);
    $('#topContacts, #footerContacts').append(formattedGithub);
    $('#topContacts, #footerContacts').append(formattedLocation);

    // APPEND SKILLS TO HEADER
    $('#header').append(HTMLskillsStart);
    //for (skill in bio.skills) {
    for (var i = 0; i < bio['skills'].length; i++) {
        var skillItem = HTMLskills.replace("%data%", bio.skills[i]);
        $('#skills').append(skillItem);
    }
};

var education = {
    "schools": [{
        "name": "Los Medanos College",
        "location": "Antioch, CA",
        "degree": "N/A",
        "majors": ["N/A"],
        "dates": "2012",
        "url": "http://www.losmedanos.edu/"

    }, {
        "name": "Kaplan University",
        "location": "Davenport, IA",
        "degree": "Bachelors of Science in Information Technology",
        "majors": ["Computer Science"],
        "dates": "2012 - 2015",
        "url": "http://kaplanuniversity.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "In Progress",
        "url": "https://udacity.com"
    }]
};

// Need to apply URL for links
education.display = function() {
    for (var i = 0; i < education['schools'].length; i++) {
        $('#education').append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedUrl = formattedName.replace('#', education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        $('.education-entry:last').append(formattedUrl + formattedDegree);

        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        $('.education-entry:last').append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
        $('.education-entry:last').append(formattedLocation);

        var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
        $('.education-entry:last').append(formattedMajors);
    }

    $('#education').append(HTMLonlineClasses);
    
    for (var i = 0; i < education['onlineCourses'].length; i++) {
        $('#education').append(HTMLschoolStart);

        var formattedCourseName = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
        var formattedCourseUrl = formattedCourseName.replace('#', education.onlineCourses[i].url);
        var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
        $('.education-entry:last').append(formattedCourseUrl + formattedSchool);

        var formattedCourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
        $('.education-entry:last').append(formattedCourseDates);

        var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
        var formattedLink = formattedURL.replace("#", education.onlineCourses[i].url);
        $('.education-entry:last').append(formattedLink);
    }
};

var work = {
    "jobs": [{
        "employer": "Axiom Technology",
        "title": "Helpdesk Technician",
        "location": "Concord, Ca",
        "dates": "April 2016 - Current",
        "description": "Axiom Technologies is a contracted company by the City of Concord. Axiom Technologies partners with the city to provide IT infrastructure and support for City Hall and Concord PD. My job is to assist and troubleshoot technical issues customers may have. Issues, such as resetting passwords, advanced application troubleshooting, imaging machines, deploying hardware and much more. With customer support being a big role in the position, I work to provide seamless experiences for the customers by solving their needs in simple and time efficient manners."
    }, {
        "employer": "Divid Designs",
        "title": "Co-Founder | Creative Director",
        "location": "Antioch, CA",
        "dates": "June 2014 - April 2016",
        "description": "Worked closely with clients offering web development, branding, and graphic design services for their business. I worked to establish visual identities through branding and fluently representing that brand through their website, print design, and digital graphic design. Utilizing Adobe Photoshop, Illustrator, and Invision, I created concepts, prototypes, and final design deliverables. Developing with HTML, CSS, JavaScript, jQuery, WordPress CMS and preferably, Craft CMS, elegant and custom website solutions were created."
    }, {
        "employer": "AT&T",
        "title": "Retail Sales Consultant",
        "location": "Brentwood, CA",
        "dates": "January 2013 - November 2015",
        "description": "Work with customers to meet and exceed their needs with sales as well as services. Maintain wireless accounts as well as consulting with customers about updated AT&T products and services. Performing services for customers including troubleshooting software and hardware of phones as well as other AT&T products such as U-verse services, AT&T Digital Life, Wireless Home Phones, and hotspot devices. With sales being the main focus of the job title, devices and services sold include tablets, smartphones, U-verse home services, Digital Life home automation, smart watches and many other accessories and products."
    }]
};

// DISPLAY WORK EXPERIENCE IN A FUNCTION RATHER THAN AN OBJECT
work.display = function() {
    for (var i = 0; i < work['jobs'].length; i++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

var projects = {
    "projects": [{
        "title": "Portfolio website",
        "dates": "August 2016",
        "description": "This was done for the first project for the Udacity Front End Dev Nanodegree. I used Zurb's Foundation for the grid framework and gulp for sass to minified css. I have a much more advanced personal website in development, I chose to meet the minimum requirements for this project to move forward with others.",
        "images": ['images/portfolio.jpg', 'images/portfolio2.jpg']
    }, {
        "title": "Frogger Game",
        "dates": "August 2016",
        "description": "This is for the 3rd project in the Udacity Front End Dev Nanodegree. I have not yet completed this project but it is in progress currently. This project uses OOP to complete a Frogger like game. This project's difficulty level stepped up big time from other past projects.",
        "images": ['images/frogger.jpg']
    }, {
        "title": "ThermoFusion",
        "dates": "Launched May 2016",
        "description": "ThermoFusion is a Heat Treating and Brazing company in Hayward, Ca. They need a new website to feature their company and their focus on a strong customer experience. This was an awesome project to work on with the complex design and freedom from Wordpress a template. Instead, I chose to go with a newer CMS called Craft.",
        "images": ['images/thermofusion.jpg', 'images/thermofusion2.jpg', 'images/thermofusion3.jpg']
    }]
};

// DISPLAY PROJECTS INFORMATION IN AN OBJECT THAT HOLDS A FUNCTION
projects.display = function() {
    for (var i = 0; i < projects['projects'].length; i++) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $('.project-entry:last').append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var image = 0; image < projects.projects[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
$('#main').append(internationalizeButton);

// CHANGE LAST NAME TO UPPERCASE
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

// RECORD CLICK LOCATION
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// GRAB LOCATIONS OF JOBS
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

//console.log(locationizer(work));