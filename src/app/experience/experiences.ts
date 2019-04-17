import { Experience } from './experience';

export const experiences: Experience[] = [
  {
    id: 0,
    company: 'Techlene',
    place: 'Indore, India',
    position: 'Software Developer Intern',
    description:'Worked as a full-stack software developer on multiple applications for clients. ' +
    'Worked in an agile environment following continuous integration and deployment.',
    timeperiod: 'August 2016 - February 2017',
    technologies: [
      'Bootstrap',
      'JSP',
      'Servlet',
      'AWT',
      'Java',
      'MySQL'
    ]
  },
  {
    id: 1,
    company: 'GSM Technologies',
    place: 'Indore, India',
    position: 'Software Developer Intern',
    description:'Worked as a full-stack software developer on an application for a local client.' +
    'The application was for a restaurant to help customers reserve tables online. This in turn' +
    'helped in reducing wait time at the restaurant.',
    timeperiod: 'February 2017 - April 2017',
    technologies: [
      'Bootstrap',
      'JSP',
      'Servlet',
      'Java',
      'JDBC',
      'MySQL'
    ]
  },
  {
    id: 2,
    company: 'Comigo',
    place: 'Iowa City, Iowa',
    position: 'Software Developer',
    description: 'Start-up with a mission to provide easy networking, collaborations ' +
    'among college students to make their projects and startups' +
    'happen through a web application',
    timeperiod: 'May 2018 - August 2018',
    technologies: [
      'Angular 6',
      'RESTful APIs',
      'JAX-RS',
      'MySQL',
      'Firebase',
      'Auth0',
      'Bootstrap',
      'HTML5',
      'CSS'
    ]
  },
  {
    id: 3,
    company: 'University of Iowa',
    place: 'Iowa City',
    position: 'Graduate Teaching Assistant',
    description: 'Supervising discussion sections, lab sessions and lectures. holding office hours, ' +
    'doubt solving sessions as well. Have been TA for courses' +
    'like Data Structures, Database Systems, and Informatics Project.',
    timeperiod: 'August 2017 - Current',
    technologies: [
      'Java',
      'MySQL',
      'Python',
      'Tableau',
    ]
  }
];
