export enum WorkCompany {
  osome = 'Osome',
  tinkoff = 'Tinkoff',
  busfor = 'Busfor',
  htmlAcademy = 'HTML Academy',
}

export const workExperienceConfig = [
  {
    companyName: WorkCompany.osome,
    position: 'Senior software\nengineer',
    date: '2021 +',
    description: '',
    skills: [
      'TypeScript',
      'React',
      'Node',
      'AWS',
      'PostgreSQL',
      'Styled-components',
      'Next',
      'GraphQL',
      'Apollo',
      'MUI',
    ],
  },
  {
    companyName: WorkCompany.tinkoff,
    position: 'Senior frontend developer',
    date: '2019 - 2021',
    description: '',
    skills: [
      'TypeScript',
      'React',
      'Redux',
      'Node',
      'Express',
      'Styled-components',
      'MUI',
      'GraphQL',
      'Motion',
      'Storybook',
    ],
  },
  {
    companyName: WorkCompany.busfor,
    position: 'Frontend developer',
    date: '2018 - 2020',
    description: '',
    skills: [
      'TypeScript',
      'React',
      'Redux',
      'SASS',
      'Styled-components',
      'Storybook',
      'Formik',
      'Motion',
    ],
  },
  {
    companyName: WorkCompany.htmlAcademy,
    position: 'Mentorship Advisor',
    date: '2018 +',
    description:
      'Led HTMLAcademy mentorship program, delivering impactful workshops on responsive design and accessibility, empowering students with industry-relevant skills. Facilitated university group courses on advanced web development concepts, including building scalable app building, efficient data storage, secure implementation, and defect resolution.',
    skills: ['TypeScript', 'React', 'Redux', 'Axios', 'SASS', 'LESS', 'PostCSS', 'Webpack'],
  },
];
