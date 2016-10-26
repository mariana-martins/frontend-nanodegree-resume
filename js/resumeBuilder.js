// <---------- Start Bio ---------->
var bio = {
    name: "Mariana Menezes",
    role: "Front-End Developer",
    contacts: {
        mobile: "+64 XXX XXX XXXX ",
        email: "x2003@yahoo.com.br",
        github: "http://github.com/mariana-martins",
        location: "Christchurch, New Zealand"
    },
    welcomeMessage: "Hello, I hope you send me a message!",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap 3", "Responsive Web Design"],
    biopic: "images/fry.jpg",
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $(".flex-box").prepend(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $(".flex-box").prepend(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $(".flex-box").prepend(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $(".flex-box").prepend(formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var skill = 0; skill < bio.skills.length; skill++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

// <---------- Finish Bio ---------->

// <---------- Start Work ---------->
var work = {
    jobs: [
        {
            employer: "Universidade Federal Fluminense",
            title: "Scholarship student",
            location: "Niterói, Brazil",
            dates: "November 2012 – October 2014",
            description: "The project that I participated was intended to examine the application of the Brazilian law 10.639/2003 in undergraduate History disciplines at Universidade Federal Fluminense. It was funded by CNPq and had as a final result a chapter of a book published in Brazil and Colombia.",
        },
        {
            employer: "Universidade Federal Fluminense",
            title: "Tutor about Contemporary History of Brazil",
            location: "Niterói, Brazil",
            dates: "April 2012 – October 2012",
            description: "I had to assist teachers and students during the academic year on matters related to the discipline called History of Brazil III (Contemporary History of Brazil)."
        },
        {
            employer: "Universidade Federal Fluminense",
            title: "Tutor about Imperial History of Brazil",
            location: "Niterói, Brazil",
            dates: "April 2011 – November 2011",
            description: "I had to assist teachers and students during the academic year on matters related to the discipline called History of Brazil II (Imperial History of Brazil). This work resulted in the second place at the awards of the History tutors at UFF."
        }
    ],
    display: function () {
        for(var job = 0; job < work.jobs.length; job++){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTittle = formattedEmployer + formattedTittle;

            $(".work-entry:last").append(formattedEmployerTittle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

// <---------- Finish Work ---------->

// <---------- Star Projects ---------->
var projects = {
    project: [
        {
            title: "Udacity Portfolio",
            dates: "September, 2016 - September, 2016",
            description: "Final Project related a lesson to build an portfolio's using HTML5 and CSS3.",
            images: ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            title: "Web Application Development with JavaScript and MongoDB - Coursera",
            dates: "February, 2016 - February, 2016",
            description: "Final Project related a lesson to build an web application using HTML5, CSS3, JavaScript and Meteor.js.",
            images: ["https://placeimg.com/197/148/tech", "https://placeimg.com/197/148/tech"]
        }
    ],
    display: function (selector) {
        for (var project = 0; project < projects.project.length; project++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
            $(".project-entry:last").append(formattedDescription);

            for (var image = 0; image < projects.project[project].images.length; image++){
                var formattedImages = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};

// <---------- Finish Projects ---------->

// <---------- Start Education ---------->

var education = {
    schools : [
        {
            name: "Universidade Federal Fluminense",
            location: "Niterói, Brazil",
            degree: "History",
            majors: ["Bachelor Degree", " Graduation in History"],
            dates: "August, 2009 - June, 2014",
            url: "http://www.uff.br/"
        }
    ],
    onlineCourses:  [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "September, 2016 - in progress",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            title: "Responsive Website Development and Design",
            school: "Coursera",
            dates: "October, 2015 - May, 2016",
            url: "https://www.coursera.org/london"
        }
    ],
    display: function () {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

            var formattedNameDegree = formattedName + formattedDegree;

            $(".education-entry:last").append(formattedNameDegree);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

            $(".education-entry:last").append(formattedLocation);

            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));

            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));

            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[school].url));
        }

        $("#education").append(HTMLonlineClasses);

        for (var course = 0; course < education.onlineCourses; course++) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

            var formatttedTitleSchool = formattedTitle + formattedSchool;

            $(".education-entry:last").append(formatttedTitleSchool);

            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));

            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
        }
    }
};


// <---------- Finish Education ---------->


function callEverything() {
    $("#mapDiv").append(googleMap);
    
    bio.display();
    work.display();
    projects.display();
    education.display();
}

callEverything();