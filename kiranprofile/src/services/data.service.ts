import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  skillsContent = [
    {'Languages': ['JavaScript','TypeScript', 'HTML5', 'CSS3'] },
    {'Framework': ['Angular (v11+)'] },
    {'Testing': ['Jasmine', 'Karma']},
    {'Development Tools': ['Visual Studio Code', 'Postman']},
    {'Version Control System': ['Git', 'GitLab', 'Jenkins']}
  ];
  experienceDetails=[
    {'Feature Development': `Designed and implemented over 15 user-facing features using Angular, enhancing user 
engagement and satisfaction.`},
    {'Performance Optimization:': `Improved application load time by 30% through efficient coding practices and 
performance optimization techniques.`},
    {'Bug Fixing': `Diagnosed and resolved more than 50 critical front-end issues, significantly enhancing application 
functionality and reliability.`},
    {'Collaboration': `Coordinated with backend developers and QA teams to integrate and test features, resulting in a 
20% reduction in bug reports.`},
    {'Code Quality': `Conducted thorough code reviews and unit testing, maintaining a 98% code coverage and 
adherence to best practices.`},
    {'Deployment': `Managed seamless code integration and deployment using Git, GitLab, and Jenkins, reducing
deployment errors by 40%.`},
    {'Agile Practices': `Played a key role in Agile methodologies, including daily stand-ups, sprint planning, and
retrospectives, improving team collaboration and project efficiency by 25%.`},
    {'User Experience': `Focused on providing a seamless user experience by implementing responsive design and
intuitive navigation, resulting in a 15% increase in user satisfaction scores.`},
    {'Training and Mentorship': `Mentored junior developers, providing guidance on best practices and coding
standards, which led to a 20% improvement in overall team productivity.`},
    // {'': ``},
    // {'': ``},
  ]
  experienceDetails2 = [
    `Developed dynamic and responsive web applications using HTML5, CSS3, JavaScript, and Angular, to enhance
UI/UX and meet business requirements.`,
    `Partnered with UI/UX designers and backend teams to ensure seamless functionality and visual consistency,
accelerating feature delivery by 20%.`,
    `Integrated RESTful APIs using Angular services (HttpClient) to display real-time data, ensuring seamless
communication between frontend and backend systems.`,
    `Improved application performance by implementing lazy loading, change detection strategies.`,
    `Used version control systems like Git and project tracking tools like JIRA for code management and sprint
planning.`,
    `Participated in code reviews, debugging, and unit testing using Karma and Jasmine, ensuring code quality and
maintainability.`
  ]
  skills(){
    return of(this.skillsContent);
  }

  workExperience(){
    return of(this.experienceDetails);
  }

  workExperience2(){
    return of(this.experienceDetails2)
  }
}
