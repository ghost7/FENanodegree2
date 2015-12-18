function formatString(template, value, placeholder) {
    if(placeholder === undefined) {
        placeholder = "%data%";
    }
    return template.replace(placeholder, value);    
}

function createDateString(startDate, endDate) {
    return startDate + " - " + (endDate ? endDate : "Future");
}

var bio = {
    "name": "Ayan Sarkar",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-555",
        "email": "aysarkar@gmail.com",
        "github": "ghost7",
        "twitter": "@aysarkar",
        "location": "Bellevue, Washington"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["programming", "JS", "C#"],
    "bioPic": "images/fry.jpg"
}

bio.display = function() {
    var formattedRole = formatString(HTMLheaderRole, this.role);
    var formattedName = formatString(HTMLheaderName, this.name);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    for(contactName in this.contacts) {
        var formattedContactTemplate = formatString(HTMLcontactGeneric, contactName, "%contact%");
        var formattedContact = formatString(formattedContactTemplate, this.contacts[contactName]);

        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }

    var formattedBioPic = formatString(HTMLbioPic, this.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = formatString(HTMLwelcomeMsg, this.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if(this.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        this.skills.forEach(function(skill) {
            var formattedSkill = formatString(HTMLskills, skill); 
            $("#skills").append(formattedSkill);
        });
    }
};

var education = {
	"schools": [{
		"name": "Virginia Tech",
		"location": "Blacksburg, Virginia",
		"degree": "Bachelor of Science",
		"majors": ["Computer Science"],
		"date": 2013,
		"url": "https://www.vt.edu/"
	}],
	"onlineCourses": [{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}]
};

education.display = function() {
    var educationSection = $("#education");

    this.schools.forEach(function(school) {
        educationSection.append(HTMLschoolStart);

        var educationEntry = $(".education-entry:last");
        
        var formattedSchoolName = formatString(HTMLschoolName, school.name);
        formattedSchoolName = formatString(formattedSchoolName, school.url, "#");
        var formattedSchoolDegree = formatString(HTMLschoolDegree, school.degree);
        educationEntry.append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = formatString(HTMLschoolDates, school.date);
        educationEntry.append(formattedSchoolDates);

        var formattedSchoolLocation = formatString(HTMLschoolLocation, school.location);
        educationEntry.append(formattedSchoolLocation);

        var majorsString = school.majors.join(", ");
        var formattedSchoolMajor = formatString(HTMLschoolMajor, majorsString);
        educationEntry.append(formattedSchoolMajor);
    });

    if(this.onlineCourses.length > 0) {
        educationSection.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(onlineCourse) {
            educationSection.append(HTMLschoolStart);

            var educationEntry = $(".education-entry:last");

            var formattedCourseName = formatString(HTMLonlineTitle, onlineCourse.title);
            var formattedSchoolName = formatString(HTMLonlineSchool, onlineCourse.school);
            var formattedTitle = formattedCourseName + formattedSchoolName;
            formattedTitle = formatString(formattedTitle, onlineCourse.url, "#");
            educationEntry.append(formattedTitle);

            var formattedDates = formatString(HTMLonlineDates, onlineCourse.date);
            educationEntry.append(formattedDates);

            var formattedSchoolUrl = formatString(HTMLonlineURL, onlineCourse.url);
            formattedSchoolUrl = formatString(formattedSchoolUrl, onlineCourse.url, "#");
            educationEntry.append(formattedSchoolUrl);
        });
    }
}

var work =  {
	"jobs": [{
		"title": "Teaching Assistant",
		"employer": "Virginia Tech",
		"location": "Blacksburg, Virginia",
		"dates": "Fall 2011 - Spring 2012",
		"description": "Graded student assignments, helped students with programming assignments"
	}, {
		"title": "SDET Intern",
		"employer": "Microsoft",
		"location": "Redmond, Washington",
		"dates": "May 2011 - August 2012, May 2012 - August 2012",
		"description": "Implemented testing frameworks, Designed testing tools, Tested various features of Windows Phone Services"
	}, {
		"title": "SDET",
		"employer": "Microsoft",
		"location": "Redmond, Washington",
		"dates": "August 2013 - August 2014",
		"description": "E2E Automation for the Windows Phone Store Service, Implemented monitoring for the Windows Phone Store Service, Analyzed Service Performance"
	}, {
		"title": "Software Engineer",
		"employer": "Microsoft",
		"location": "Redmond, Washington",
		"dates": "August 2014 - Present",
		"description": "Developer on Windows Store Services, Helped maintain legacy store services"
	}]
};

work.display = function() {
    this.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = formatString(HTMLworkEmployer, job.employer);
        var formattedTitle = formatString(HTMLworkTitle, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var workEntry = $(".work-entry:last");

        workEntry.append(formattedEmployerTitle);
        
        var formattedDate = formatString(HTMLworkDates, job.dates);
        workEntry.append(formattedDate);
        
        var formattedJob = formatString(HTMLworkLocation, job.location);
        workEntry.append(formattedJob);

        var formattedDescription = formatString(HTMLworkDescription, job.description);
        workEntry.append(formattedDescription);
    });
}

var projects = {
	"projects": [{
		"title": "Insert Title Here",
		"dates": "May 2011 - June 2011",
		"description": "Insert Project Descriprion Here",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	}, {
		"title": "Insert Title Here",
		"dates": "May 2011 - June 2011",
		"description": "Insert Project Descriprion Here",
		"images": [
			"images/197x148.gif",
			"images/197x148.gif"
		]
	}]
};

projects.display = function() {
    this.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var projectEntry = $(".project-entry:last");
        
        var formattedTitle = formatString(HTMLprojectTitle, project.title);
        projectEntry.append(formattedTitle);

        var formattedDates = formatString(HTMLprojectDates, project.dates);
        projectEntry.append(formattedDates);

        var formattedDescription = formatString(HTMLprojectDescription, project.description);
        projectEntry.append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = formatString(HTMLprojectImage, image);
            projectEntry.append(formattedImage);
        });
    });
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
