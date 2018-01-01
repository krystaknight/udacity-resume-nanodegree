
// BIO

var bio = {
  'name': 'Krysta Knight',
  'role': 'Applications Developer',
  'contacts': {
    'mobile':'555-555-5555',
    'email': 'klknight23@gmail.com',
    'github': 'github.com/krystaknight',
    'location': 'St. Louis',
  },
  'welcomeMessage': 'I am currently working as a Software Developer in the St. Louis area.',
  'skills': ['Java', 'Python', 'JavaScript', 'Android', 'OpenSource', 'Github', 'GerritHub'],
  'bioPic': 'images/me.jpg'
}

bio.display = function (){
  'use strict';
   var formattedName = HTMLheaderName.replace("%data%", bio.name),
       formattedRole = HTMLheaderRole.replace("%data%", bio.role),
       formattedphoto = HTMLbioPic.replace("%data%", bio.bioPic),
       formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
       formattedSkill,
       skill,
       info;

   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName);
   $("#header").append(formattedphoto);
   $("#header").append(formattedWelcome);

   var formattedContactInfo = [];
   formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
   formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
   formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

   if (bio.skills.length > 0) {
       $("#header").append(HTMLskillsStart);
       for (skill in bio.skills) {
               $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
       }
   }

   for(info in formattedContactInfo) {
	    $("#topContacts").append(formattedContactInfo[info]);
  }
};

// EDUCATION

var education = {
  'schools': [
      {
      'name': 'University of Missouri - St. Louis',
      'location': 'St. Louis, Mo',
      'degree': 'Bachlors of Science in Computer Science',
      'major': 'Computer Science',
      'dates': 'August 2015 - May 2017'
    },
    {
    'name': 'Southwestern Illinios College',
    'location': 'Belleville, IL',
    'degree': 'Associates of Science',
    'major': 'Applied Mathematics',
    'dates': 'August 2011 - May 2013'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Scalable Microservices with Kuberenetes',
      'school': 'Udacity',
      'dates': 'Sept 2017 - Oct 2017',
      'url': 'https://classroom.udacity.com/courses/ud615',
    }
  ]
};

education.display = function (){
  'use strict';
   var formattedHtml, edu;
   if (education.schools.length > 0 || education.onlineCourses.length > 0) {
       for (edu in education.schools) {
               $("#education").append(HTMLschoolStart);
               $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name));
               $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
               $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
               $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
               $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].major));
       }
     }

       if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(edu in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title).replace("#", education.onlineCourses[edu].url),
				formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school),
				formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates),
				formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url).replace("#", education.onlineCourses[edu].url  + "\""+"id=\"onlineURL");

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

};

// WORK

var work = {
  'jobs':[
    {
      'employer': 'AT&T',
      'title': 'Applications Developer',
      'dates': 'June 2017 - Current',
      'location': 'St. Louis, Mo',
      'description': ''
    },
    {
      'employer': 'AT&T',
      'title': 'Student Intern: Applications Developer',
      'dates': 'June 2016 - August 2016',
      'location': 'St. Louis, Mo',
      'description': ''
    },
    {
      'employer': 'Edward Jones',
      'title': 'Student Intern: Applications Developer',
      'dates': 'June 2015 - August 2105',
      'location': 'St. Louis, Mo',
      'description': ''
    },
  ]
};
work.display = function (){
  'use strict';
   var i = 0, a;
   for (i = 0; i < work.jobs.length; i++) {
       $("#workExperience").append(HTMLworkStart);
       a = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
       $(".work-entry:last").append(a);
       a = HTMLworkDates.replace("%data%", work.jobs[i].dates);
       $(".work-entry:last").append(a);
       a = HTMLworkLocation.replace("%data%", work.jobs[i].location);
       $(".work-entry:last").append(a);
       a = HTMLworkTitle.replace("%data%", work.jobs[i].title);
       $(".work-entry:last").append(a);
       a = HTMLworkDescription.replace("%data%", work.jobs[i].description);
       $(".work-entry:last").append(a);
     }
};

// PROJECTS

var projects = {
  'projects': [
    {
      'title': 'Great Minds',
      'dates': 'Jan 2017 - May 2017',
      'description': 'Android app that allows user to take indiviual quizes and a group quiz with a single leader.',
      'images':['images/computer.jpeg']
    }
  ],
};

projects.display = function (){
 var proj, img;
 for (proj in projects.projects) {
         $("#projects").append(HTMLprojectStart);
         $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", "<a href=\""+ projects.projects[proj].link + "\" target=\"_bkank\">" + projects.projects[proj].title + "</a>"));
         $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].dates));
         $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
         for (img in projects.projects[proj].images){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]));
         }
 }
};

// Call display functions

bio.display();
education.display();
work.display();
projects.display();
