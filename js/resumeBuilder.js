var bio = {
	"name": "Tyler Pena",
	"role": "Web Developer",
	"contacts": [
		{
		"mobile": "925-813-2796",
		"email": "tylerpena@me.com",
		"twitter": "@mrtpain_",
		"github": "mrtpain",
		"location": "Oakley, CA"
	}
	],
	"bioPic": 'images/me.jpg',
	"welcomeMessage": "Welcome to my resume where you can read all about my awesome ass skills. I've been developing for several years now and am excelling at a crazy pace. So crazy that before I finish projects, I already want to restart and build a newer, faster and better one.",
	"skills": ["HTML5", "CSS3", "SASS", "jQuery", "JavaScript", "Craft CMS", "Foundation", "Bootstrap", "Gulp", "Twig", "Grunt"]
};

var work = {
	"jobs": [
		{
			"employer": "Axiom Technology",
			"title": "Helpdesk Technician",
			"location": "Concord, Ca",
			"dates": "April 2016 - Current",
			"description": "Axiom Technologies is a contracted company by the City of Concord. Axiom Technologies partners with the city to provide IT infrastructure and support for City Hall and Concord PD. My job is to assist and troubleshoot technical issues customers may have. Issues, such as resetting passwords, advanced application troubleshooting, imaging machines, deploying hardware and much more. With customer support being a big role in the position, I work to provide seamless experiences for the customers by solving their needs in simple and time efficient manners."
		},
		{
			"employer": "Divid Designs",
			"title": "Co-Founder | Creative Director",
			"location": "Antioch, CA",
			"dates": "June 2014 - April 2016",
			"description": "Worked closely with clients offering web development, branding, and graphic design services for their business. I worked to establish visual identities through branding and fluently representing that brand through their website, print design, and digital graphic design. Utilizing Adobe Photoshop, Illustrator, and Invision, I created concepts, prototypes, and final design deliverables. Developing with HTML, CSS, JavaScript, jQuery, WordPress CMS and preferably, Craft CMS, elegant and custom website solutions were created."
		},
		{
			"employer": "AT&T",
			"title": "Retail Sales Consultant",
			"location": "Brentwood, CA",
			"dates": "January 2013 - November 2015",
			"description": "Work with customers to meet and exceed their needs with sales as well as services. Maintain wireless accounts as well as consulting with customers about updated AT&T products and services. Performing services for customers including troubleshooting software and hardware of phones as well as other AT&T products such as U-verse services, AT&T Digital Life, Wireless Home Phones, and hotspot devices. With sales being the main focus of the job title, devices and services sold include tablets, smartphones, U-verse home services, Digital Life home automation, smart watches and many other accessories and products."
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Los Medanos College",
			"location": "Antioch, CA",
			"degree": "N/A",
			"major": "N/A",
			"dates": "2012"
			
		},
		{
			"name": "Kaplan University",
			"location": "Davenport, IA",
			"degree": "Bachelors of Science in Information Technology",
			"major": "Computer Science",
			"dates": "2012 - 2015"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "ThermoFusion",
			"date": "2015 - 2016",
			"description": "N/A",
			"images": ['images/fry.jpg']
		},
		{
			"title": "Bizzy Bees",
			"date": "2016",
			"description": "N/A",
			"images": ['images/fry.jpg']
		},
		{
			"title": "Rivers Edge Guide Service",
			"date": "2015",
			"description": "N/A",
			"images": ['images/fry.jpg']
		}
	]
}

// DISPLAY PROJECTS INFORMATION IN AN OBJECT THAT HOLDS A FUNCTION
projects.display = function() {
	for(project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

// Need to apply URL for links
education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].major);
		$('.education-entry:last').append(formattedMajors);
	}
};

// DISPLAY BIO INFORMATION IN AN OBJECT THAT HOLDS A FUNCTION
bio.display = function () {
	// APPEND NAME, ROLE, PIC, AND WELCOME MESSAGE TO HEADER
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').append(formattedWelcome);
	$('#header').append(formattedPic);

	// APPEND CONTACTS TO HEADER
	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$('#topContacts, #footerContacts').append(formattedMobile);
		$('#topContacts, #footerContacts').append(formattedEmail);
		$('#topContacts, #footerContacts').append(formattedTwitter);
		$('#topContacts, #footerContacts').append(formattedGithub);
		$('#topContacts, #footerContacts').append(formattedLocation);
	}

	// APPEND SKILLS TO HEADER
	$('#header').append(HTMLskillsStart);
	for(skill in bio.skills) {
		var skillItem = HTMLskills.replace("%data%", bio.skills[skill]);
		$('#skills').append(skillItem);
	}
}

// DISPLAY WORK EXPERIENCE IN A FUNCTION RATHER THAN AN OBJECT
work.display = function () {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%',  work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%',  work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%',  work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

// CHANGE LAST NAME TO UPPERCASE
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}



bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
$('#main').append(internationalizeButton);





// RECORD CLICK LOCATION
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


// GRAB LOCATIONS OF JOBS
function locationizer(work_obj) {
	var locationArray = [];

	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));