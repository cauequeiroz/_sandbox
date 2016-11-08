/*
    ========================================
    Personal Info    
    ========================================
*/

var bio = {
    "name": "Caue Queiroz",
    "role": "Front-end Developer",
    "welcomeMessage": "I am the one who knocks.",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "55 11 946969442",
        "email": "cauenqueiroz@gmail.com",
        "github": "cauequeiroz",
        "twitter": "cauequeirozz",
        "location": "São Paulo SP Brazil"
    },
    "skills": ["HTML", "CSS", "Javascript"]
};

var projects = [
    {
        "title": "Genius Dev Edition",
        "dates": "2017",
        "description": "A genius version for developers.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    },
    {
        "title": "TicTacToe",
        "dates": "2016",
        "description": "Tictactoe game built with JS.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }
];

var work = {
    "jobs": [
        {
            "employer": "Intuitive Intelligence",
            "title": "Front-end Developer",
            "location": "São Paulo SP Brazil",
            "dates": "2005 ~ 2009",
            "description": "Develop some great things with JS" 
        },
        {
            "employer": "Intuitive Intelligence",
            "title": "Front-end Developer",
            "location": "São Paulo SP Brazil",
            "dates": "2005 ~ 2009",
            "description": "Develop some great things with JS" 
        },
        {
            "employer": "Intuitive Intelligence",
            "title": "Front-end Developer",
            "location": "São Paulo SP Brazil",
            "dates": "2005 ~ 2009",
            "description": "Develop some great things with JS" 
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "USP",
            "location": "São Paulo SP Brazil",
            "dates": "2010 ~ 2014",
            "url": "http://usp.com.br/",
            "majors": ["CompScience", "English"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to AJAX",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://udacity.com/ajax"
        },
        {
            "title": "Javascript Design Patterns",
            "school": "Udacity",
            "dates": "2016",
            "url": "http://udacity.com/design"
        }
    ]
}

/*
    ========================================
    Core    
    ========================================
*/
if ( bio['skills'].length ) {
   $('#header').append(HTMLheaderName.replace('%data%', 'Caue Queiroz'));
   $('#header').append(HTMLskillsStart);

   for (var i in bio['skills']) {
        var formattedSkill = HTMLskills.replace('%data%', bio['skills'][i]);
        $('#skills').append(formattedSkill);
   }
}

var displayWork = function() {
    for (var i in work.jobs ) {
        $('#workExperience').append(HTMLworkStart);

        var job      = work.jobs[i],
            employer = HTMLworkEmployer.replace('%data%', job.employer),
            jobtitle = HTMLworkTitle.replace('%data%', job.title),
            dates    = HTMLworkDates.replace('%data%', job.dates),
            local    = HTMLworkLocation.replace('%data%', job.location),
            descript = HTMLworkDescription.replace('%data%', job.description),

            fullHTML = employer + jobtitle + dates + local + descript;

        $('#workExperience .work-entry:last').append(fullHTML);
    }
}
displayWork();

$('#main').append(internationalizeButton);

var inName = function(name) {
    var first = name.split(' ')[0],
        last  = name.split(' ')[1];

    var newFirst = first[0].toUpperCase() + first.slice(1).toLowerCase();
    var newLast  = last.toUpperCase();

    return newFirst + ' ' + newLast;
}