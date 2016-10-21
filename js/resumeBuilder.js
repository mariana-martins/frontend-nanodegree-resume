/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name":"Mariana Menezes",
    "role": "Front-End Web Developer",
    "contact": "marianamartinsmenezes@gmail.com",
    "message": "Hello, I hope you send me a message!",
    "skills": ["HTML5", "CSS3", "JavaScript", "Bootstrap 3", "Sass", "Responsive Web Design", "jQuery"],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [
        {
            "name-course": "Front-End Web Developer Nanodegree",
            "where": "Udacity",
            "type": "Online Degree"
        },
        {
            "course-name": "Responsive Website Development and Design",
            "where": "Coursera and University of London",
            "type": "Online Degree"
        },
        {
            "course-name": "Shaping up with Angular.js",
            "where": "Codeschool",
            "type": "Online Degree"
        },
        {
            "course-name": "Sass",
            "where": "Alura",
            "type": "Online Degree"
        },
        {
            "course-name": "Bootstrap",
            "where": "Alura",
            "type": "Online Degree"
        },
        {
            "course-name": "Bachelor Degree, History",
            "where": "Universidade Federal Fluminense",
            "type": "Presential Bachelor Degree"
        }
    ]
};

var work = {
    "jobs": [
        {
            "title": "Scholarship student",
            "employer": "Universidade Federal Fluminense",
            "location": "Niterói, RJ, Brazil",
            "date": "November 2012 – October 2014",
            "description": "The project that I participated was intended to examine the application of the Brazilian law 10.639/2003 in undergraduate History disciplines at Universidade Federal Fluminense. It was funded by CNPq and had as a final result a chapter of a book published in Brazil and Colombia."
        },
        {
            "title": "Tutor about Contemporary History of Brazil",
            "employer": "Universidade Federal Fluminense",
            "location": "Rio de Janeiro, RJ, Brazil",
            "date": "April 2012 – October 2012",
            "description": "I had to assist teachers and students during the academic year on matters related to the discipline called History of Brazil III (Contemporary History of Brazil)."
        },
        {
            "title": "Tutor about Imperial History of Brazil",
            "employer": "Universidade Federal Fluminense",
            "location": "Niterói, RJ, Brazil",
            "date":"April 2011 – November 2011",
            "description":"I had to assist teachers and students during the academic year on matters related to the discipline called History of Brazil II (Imperial History of Brazil). This work resulted in the second place at the awards of the History tutors at UFF."
        }
    ]
};

var project = {
    "projects" : [
        {
            "project-name": "Udacity-Portfolio",
            "url": "https://github.com/mariana-martins/Udacity-Portfolio"
        },
        {
            "project-name": "Roberto's Portfolio",
            "url": "https://github.com/mariana-martins/robertowm.github.io"
        },
        {
            "project-name": "Web Application Development with JavaScript and MongoDB Coursera",
            "url": "https://github.com/mariana-martins/Web-Application-Development-with-JavaScript-and-MongoDB-Coursera"
        }
    ]
};

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTittle = formattedEmployer + formattedTittle;

    $('.work-entry:last').append(formattedEmployerTittle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $('.work-entry:last').append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $('.work-entry:last').append(formattedDescription);
}

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    console.log(formattedSkill);
}


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));



function inName(oldName) {
    var finalName = oldName;

    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");


    // Don't delete this line!
    return finalName;
}

$("#main").append(internationalizeButton);