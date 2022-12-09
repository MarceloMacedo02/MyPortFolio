export interface Person {
  id?: number;
  name?: string;
  singername?: string;
  title?: string;
  date_birth?: string;
  spoken_langages?: string;
  nationality?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  aboutme?: string;
  image?: string;
  values?: string;
  interests?: string;
  groupSkills?: GroupSkills[];
  educations?: Education[];
  certifications?: Certification[];
  cousers?: Course[];
}
export interface Interest {
  interest?: string;
}
export interface GroupSkills {
  id?: any;
  name?: string;
  skills?: Skills[];
  description?: string;
}

export interface Skills {
  skill?: string;
  percent?: number;
}
export interface Education {
  id?: any;
  periodo?: string;
  instituition?: string;
  courso?: string;
  description?: string;
}
export interface Certification {
  id?: any;
  periodo?: string;
  certification?: string;
  link?: string;
  description?: string;
}
export interface Course {
  id?: any;
  periodo?: string;
  course?: string;
  instituition?: string;
  link?: string;
  description?: string;
}

const courses: Course[] = [
  {
    periodo: 'October/2022',
    course: 'Testes unitários em JAVA: Domine JUnit, Mockito e TDD ',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-e7d74e60-acaa-4e77-8e71-45933aeb97d9',
    description: '',
  },
  {
    periodo: 'May/2022',
    course: 'Programação em Python do básico ao avançado',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-3232b417-37d5-4f1b-a78c-d0dc6c7f1ed9',
    description: '',
  },
  {
    periodo: 'May/2022',
    course: 'JIRA Software para Usuários Não Admins e Confluence Básico',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-7d093a64-1b54-4d6b-91bb-6dda374a9a00',
    description: '',
  },
  {
    periodo: 'March/2022',
    course: 'Orquestração de Containers com Kubernetes',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-70f0dd94-edb1-4aa6-ac56-fd8886014cd6',
    description: '',
  },
  {
    periodo: 'January/2022',
    course: 'Treinamento Teórico e Prático de GIT e Controle de Versão',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-5f6fa29d-a710-4bc2-a70c-13d0fe81440f',
    description: '',
  },
  {
    periodo: 'August/2021',
    course: 'Spring Boot & MVC com Thymeleaf',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-526d391c-2e13-4c0a-8047-fec04998f361',
    description: '',
  },
  {
    periodo: 'August/2021',
    course: 'Angular 7/8 - Material Design + Node.js + MongoDB + Firebase',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-22a53380-a94a-4623-b245-91215da94ca8/',
    description: '',
  },
  {
    periodo: 'April/2021',
    course: 'Docker Essencial para o Desenvolvedor',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-156ded1b-3233-4f0e-997e-b7596a7d31ba',
    description: '',
  },
  {
    periodo: 'May/2020',
    course: 'Spring Boot, Hibernate, REST, Ionic, JWT, S3, MySQL, MongoDB',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-e9fea0ef-ed4d-4a42-bc80-921a2ca659c4',
    description: '',
  },
  {
    periodo: 'May/2019',
    course: 'Microsserviços Java com Spring Boot e Spring Cloud',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-0838ae55-7b4c-4b34-963b-486d4b00906a',
    description: '',
  },
  {
    periodo: 'May/2018',
    course: 'Gestão Ágil com Scrum COMPLETO + 3 Cursos EXTRAS',
    instituition: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-a4f72e7f-678d-4766-b646-4357f9e9a630',
    description: '',
  },
];
const certifications: Certification[] = [
  {
    periodo: 'October 14, 2022',
    certification: 'AZ-900 Microsoft Certified: Azure Fundamentals',
    link: 'https://www.credly.com/badges/c61c1d93-b447-4e43-b076-9cd7ddfc5ca9/linked_in_profile',
    description:
      'Knowledge of cloud computing concepts, models, and services, such as public, private, and hybrid cloud, in addition to infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).',
  },
  {
    periodo: 'March 11, 2022',
    certification: 'AWS Certified Developer – Associate',
    link: 'https://www.credly.com/badges/0ab30099-75af-40c6-8afe-d1b492c53e65/linked_in_profile',
    description:
      'Developer professionals have one or more years of hands-on experience developing and maintaining an AWS-based application. Skills Validated by Certification.',
  },
  {
    periodo: 'February 04, 2022',
    certification: 'AWS Certified Cloud Practitioner',
    link: 'https://www.credly.com/badges/f7fb1e75-b2f6-4e1e-8aa2-ea32615e3970/linked_in_profile',
    description:
      'The AWS Certified Cloud Practitioner provides a basic understanding of AWS Cloud concepts, services, and terminology.',
  },
];
const educations: Education[] = [
  {
    periodo: 'Feb/2012 - Jul/2015',
    instituition: 'Unileão University Center',
    courso: 'Analysis and Systems Development',
    description:
      'Graduation course for professionals specialized in developing programs using codes and programming languages to create systems for cell phones, internet, tablets, etc. Using database administration resources, networks and others.',
  },

  {
    periodo: '1992 - 1996',
    instituition:
      'IFCE - Federal Institute of Education, Science and Technology of Ceará ',
    courso: 'Telecommunications',
    description:
      'The trained professional is responsible for the installation, operation and maintenance of telecommunications systems. Following the standards and technical strategies of quality, health, safety and environmental preservation.',
  },
];
/*
Arquitetura de soluções



*/
const groupSkills: GroupSkills[] = [
  {
    name: 'Solution',
    skills: [
      { skill: 'Architecture', percent: 100 },
      { skill: 'Microservices', percent: 100 },
      { skill: 'AWS', percent: 70 },
      { skill: 'Azure', percent: 40 },
    ],
  },
  {
    name: 'Programming Language',
    skills: [
      { skill: 'Java 2EE', percent: 100 },
      { skill: 'Spring Boot', percent: 100 },
      { skill: 'C#', percent: 50 },
      { skill: '.Net', percent: 50 },
      { skill: 'Python', percent: 60 },
    ],
  },
  {
    name: 'BackEnd',
    skills: [
      { skill: 'Spring Boot', percent: 100 },
      { skill: 'Spring MVC', percent: 100 },
      { skill: 'CDI', percent: 100 },
      { skill: 'Hibernate', percent: 100 },
      { skill: 'Junit', percent: 90 },
      { skill: 'Sonarqube', percent: 100 },
      { skill: 'Fortify', percent: 90 },
    ],
  },
  {
    name: 'FrontEnd',
    skills: [
      { skill: 'JSP', percent: 100 },
      { skill: 'JSF', percent: 100 },
      { skill: 'VRaptor', percent: 70 },
      { skill: 'PrimeFaces', percent: 80 },
      { skill: 'Thymeleaf', percent: 80 },
      { skill: 'React', percent: 60 },
      { skill: 'Angular', percent: 70 },
      { skill: 'CSS', percent: 90 },
      { skill: 'HTML', percent: 90 },
      { skill: 'JavaScript', percent: 90 },
      { skill: 'Node', percent: 60 },
      { skill: 'JQuery', percent: 70 },
      { skill: 'Bootstrap', percent: 80 },
    ],
  },
  { name: 'Mobile', skills: [{ skill: 'Ionic', percent: 40 }] },
  {
    name: 'Data Base',
    skills: [
      { skill: 'JPA', percent: 100 },
      { skill: 'PostgreSQL', percent: 100 },
      { skill: 'MySQL', percent: 100 },
      { skill: 'MongoDB', percent: 100 },
    ],
  },
  {
    name: 'Devops',
    skills: [
        { skill: 'CI/CD', percent: 100 },
        { skill: 'WorkFlow', percent: 70 },
      { skill: 'Kubernetes', percent: 60 },
      { skill: 'Docker', percent: 90 },
      { skill: 'Git', percent: 100 },
      { skill: 'GitHub', percent: 100 },
      { skill: 'GitLab', percent: 100 },
    ],
  },
  {
    name: 'Agile methodology',
    skills: [
      { skill: 'Scrum', percent: 80 },
      { skill: 'Kanban', percent: 80 },
      { skill: 'JIRA', percent: 80 },
    ],
  },
  {
    name: 'IDE',
    skills: [
      { skill: 'Eclipse', percent: 100 },
      { skill: 'VSCode', percent: 100 },
      { skill: 'IntelliJ', percent: 100 },
      { skill: 'PyCharm', percent: 80 },
    ],
  },
];

export const basePerson: Person = {
  id: 1,
  name: 'Marcelo Muniz Macedo',
  singername: 'Marcelo Macedo',
  title: 'Full Stack Developer - Developer AWS',
  date_birth: '31/July',
  nationality: 'Brazilian',
  phone: '+55 88 994635883',
  educations: educations,
  certifications: certifications,
  cousers: courses,
  groupSkills: groupSkills,
  values: 'Family, organization, loyalty, care, punctuality,',
  interests:
    'technological innovations, learning new languages, travel, music, learning new things',
  image: './assets/images/users/user-4.jpg',
  email: 'marcelo_maccedo01@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/marcelo-macedo-98154433/',
  github: 'https://github.com/MarceloMacedo02/',
  aboutme:
    'Analyst, architect and systems developer, with more than 15 years working in the market, enthusiastic about technology in constant evolution. I always work with the aim of optimizing resources and good development and governance practices, obtaining results and products aligned with the business objectives, such as delivering values. I value teamwork following practices, and always motivated to build systems with innovative technologies.',
};
