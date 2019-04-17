import { Project } from './project';

export const projects: Project[] = [
  {
    id: 0,
    title: 'Material Monitoring System',
    description: 'An online application to track the consumption of construction' +
    'material at any construction site. Designed to reduce losses bore by a builder or' +
    'a construction company. Added functionalities include online ordering, tracking.',
    link: '',
    technologies: [
      'Bootstrap',
      'JavaScript',
      'HTML5',
      'JSP',
      'JDBC',
      'Java',
      'MySQL'
    ]
  },
  {
    id: 1,
    title: 'eParking',
    description: 'Application to reserve parking spots before leaving home. Designed to reduce' +
    'the amount of time being wasted in looking for a parking spot.',
    link: '',
    technologies: [
      'Bootstrap',
      'JavaScript',
      'HTML5',
      'CSS',
      'Java',
      'MySQL'
    ]
  },
  {
    id: 2,
    title: 'ScratchPen',
    description: 'Google Blockly based application designed to give kids an introduction to computer programming',
    link: 'https://github.com/vivekwap4/ScratchPen',
    technologies: [
      'Bootstrap',
      'Google Blockly',
      'CSS',
      'JavaScript',
      'jQuery',
      'Bower',
      'Firebase'
    ]
  },
  {
    id: 3,
    title: 'RestaurantApp',
    description: 'Angular based application for any restaurant, providing details on menu, ratings, and comments by users.',
    link: 'https://github.com/vivekwap4/RestaurantApp',
    technologies: [
      'Angular 2',
      'TypeScript',
      'jQuery',
      'MySQL',
    ]
  },
  {
    id: 4,
    title: 'DataCapture',
    description: 'Web application for BioTech students to help them store data of their research findings using dynamic forms' +
    'and graphical analysis. Inspired by AudioGene.',
    link: 'https://github.com/vivekwap4/DataCapture',
    technologies: [
      'Ruby on Rails',
      'AJAX',
      'RESTful APIs',
      'Bootstrap',
      'PostgreSQL',
      'jQuery',
      'JavaScript'
    ]
  }
];
