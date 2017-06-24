/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
This has had the mobile number and facebook address removed for privacy reasons.
 */
/**
 * Assign a bio or profile to the page.
 * @param {Object[]} bio - A profile of a person, and a welcome message.
 * @param {string} bio.bioPic - Shows an image of the person on the profile.
 * @param {string} bio.name - Shows the name.
 * @param {string} bio.role - Shows the occupation.
 * @param {string} bio.contacts - Shows the contact information.
 * @param {string} bio.skills - Shows the skills.
 * @param {string} bio.contacts.location - Shows the living location.
 * @param {string} bio.contacts.welcomeMessage - Shows the welcome message.
 */
var bio = {
    "name": "Peter Simpson",
    "role": "Student",
    "contacts": {
        "mobile": "000-000-1128",
        "email": "petergns@outlook.com",
        "github": "petergns",
        "facebook": "facebook",
        "location": "Washington D.C.",
    },

    "welcomeMessage": "Reading up on things, and writing away in his free time.",
    "skills": ["building web pages", "writing fiction stories", "basic graphic design", "can dance kind of"],
    "biopic": "images/peter.jpg",
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedFacebook = HTMLfacebook.replace('%data%', bio.contacts.facebook);
    var bioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var contactdetails = formattedMobile + formattedEmail + formattedGithub +
        formattedFacebook + bioLocation;
    var contactinfo = formattedName + formattedRole + bioPic;
    $("#topContacts, #footerContacts").append(contactdetails);
    $("#header").prepend(contactinfo);
    $("#header").append(welcomeMessage);
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        console.log(skill);
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

bio.display();

/**
 * Assign employer to a list of jobs.
 * @param {Object[]} employer - The employer.
 * @param {string} jobs.title - The title or role at the workplace.
 * @param {string} jobs.dates - The dates that the job was worked.
 * @param {string} work.location - Where the job was located.
 * @param {string} work.description - Describes the job.
 */
var work = {
    "jobs": [{
        "employer": "Employer",
        "title": 'Job Title',
        "dates": "2008-2012",
        "description": "Worked at a local business through university while I was living in New Zealand. I learned how to get along in teams, deal with customers." +
            "<br>Was a fun experience, even though I did not get to experience time travel. I learned how to get along in teams, deal with customers, and stack shelves.",
        "location": "Wellington, NZ"
    }]
};

work.display = function() {
    work.jobs.forEach(function(jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", jobs.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
        var formattedWork = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedWork);
    });
};

work.display();
/**
 * Assign the project to a list of projects.
 * @param {Object[]} projects - The project.
 * @param {string} project.title - The title of the project.
 * @param {string} project.dates - The dates of the project.
 * @param {string} project.description - Description of the project.
 * @param {string} project.images - Images of the project.
 */
var projects = {
    "projects": [{
        "title": "Build a Mug Web Page (Intro to HTML and CSS - Udacity)",
        "dates": "March 09, 2016",
        "description": "Was given a mock of a web page, and had to try and get it as close to the mock as I could.",
        "images": ["images/udacity-mug-page.png", "images/udacity-mug-page-html.png"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedImage = HTMLprojectImage.replace("%data%", img);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

/**
 * Assign education to a list of schools, and online courses.
 * @param {Object[]} education - Education
 * @param {string} schools.name - The name of the school, and it's URL.
 * @param {string} schools.location - The location of the school.
 * @param {string} schools.degree - The degree level achieved.
 * @param {string} schools.major - The majors that were taken.
 * @param {string} schools.dates - The dates attended.
 * @param {string} onlineCourses.name - The name of the school.
 * @param {string} onlineCourses.school - The online school attended.
 * @param {string} onlineCourses.dates - The date the course was completed.
 * @param {string} onlineCourses.url - URL to the course.
 */
var education = {
    "schools": [{
        "name": "Victoria University",
        "location": "Wellington, New Zealand",
        "major": "Philosophy, Information Systems",
        "degree": "Undergraduate",
        "dates": "2008",
        "url": "https://www.victoria.ac.nz/",
    }, {
        "name": "Victoria University",
        "location": "Wellington, New Zealand",
        "degree": "Undergraduate",
        "major": "Philosophy, Poltical Science",
        "dates": "2010",
        "url": "https://www.victoria.ac.nz/",
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/viewer#!/c-ud304",
    }, {
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd000",
    }]
};

education.display = function() {
    education.schools.forEach(function(schools) {
        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace('%data%', schools.name)
            .replace('#', schools.url);
        var schoolLocation = HTMLschoolLocation.replace("%data%", schools.location);
        var schoolDegree = HTMLschoolDegree.replace("%data%", schools.degree);
        var schoolMajor = HTMLschoolMajor.replace("%data%", schools.major);
        var schoolDates = HTMLschoolDates.replace("%data%", schools.dates);
        var formattedEducation = schoolName + schoolDegree + schoolDates +
            schoolLocation + schoolMajor;
        $(".education-entry:last").append(formattedEducation);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
        var onlineDates = HTMLonlineDates.replace("%data%", onlineCourses.dates);
        var onlineURL = HTMLonlineURL.replace('%data%', onlineCourses.url)
            .replace('#', onlineCourses.url);
        var OnlineCourse = onlineTitle + onlineSchool + onlineDates + onlineURL;
        $(".education-entry:last").append(OnlineCourse);
    });
};

education.display();

/**
 * Assigns the x and y locations to the page.
 * @param {Object[]} loc.pageX - Shows the x value.
 * @param {Object[]} loc.pageX - Shows the y value.
 */
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

/**
 * Assigns the last name to be changed from lowercase to UPPERCASE.
 * @param {Object[]} formattedNewName - Refers to the name of the person on the profile.
 * @param {Object[]} internationalizeButton - Refers to the function inName(name) button.
 */
function inName(formattedNewName) {
    formattedNewName = formattedNewName.trim().split(" ");
    console.log(formattedNewName);
    formattedNewName[1] = formattedNewName[1].toUpperCase();
    formattedNewName[0] = formattedNewName[0].slice(0, 1).toUpperCase() +
        formattedNewName[0].slice(1).toLowerCase();
    return formattedNewName[0] + " " + formattedNewName[1];
}

$("#main").append(internationalizeButton);

/**
 * Assigns the locations to a google map.
 * @param {Object[]} googleMap - Appends the google map to the page element #mapDiv.
 */
$("#mapDiv").append(googleMap);
