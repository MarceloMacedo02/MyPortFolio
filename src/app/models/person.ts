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
  experiences?: Experience[];
}
export interface Experience {
  id?: any;
  periodo?: string;
  company?: string;
  principal?: string;
  description?: string;
  activeExperience?: ActiveExperience[];
  skills?: SkillsExperience[];
}
export interface SkillsExperience {
  id?: any;
  description?: string;
  skills?: string;
}
export interface ActiveExperience {
  id?: any;
  periodo?: string;
  principal?: string;
  description?: string;
  environment?:string,
  skills?: SkillsExperience[];
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
const experiences: Experience[] = [

  {
    periodo: "January/2022 - October/2022",
    company: "GFT Brasil",
    principal: "AWS Builder - AWS application developer",
    description: "AWS consulting company in the financial sector, when I acquired two AWS certifications, I worked on the MAP project in the activity of accelerating and modernizing and migrating some services from the bank's mainframe to the AWS cloud, as a developer I participated in meetings with teams from the bank and AWS to develop applications that would meet the needs migration process with cloud best practices. 100% remote activity with Scrum ceremonies with jira, with delivery of the MVP's programmed in the backlog sprints. Quality control, security and vulnerability of Soft using SonarQube and Fortify",
    skills: [
      {description:"Programming Language:",skills: " Java Spring Boot, Python"},
      {description:"AWS:",skills: " Lambda, Bucket S3, SNS, SQS, ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, DynamoDB"},
      {description:"Monitoring:",skills: " ClaudWatch, Promepheus and Grafana"},
      {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, resilience4j"},
      {description:"Broker:",skills: " Apache Kafka"},
      {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
      {description:"Agile Methodology:",skills: " Spring, Kanban"},
      {description:"Versioning:",skills: " Git, Github"}],
    activeExperience: [
      {
        periodo:"Microservice 01",
        principal:"Developer BackEnd",
        description:  "Microservice in Java Spring Boot triggered by message events published in an SQS queue, the message in json format is converted into an object enriched by business rules, updated or inserted into the DynamoDB database, with idempotency control, resilience(resilience4j retry ), available for consultation by Rest API requests, monitoring in ClaudWatch, Promepheus and Grafana.Tests with JUnit and Mockito, Quality control, security and vulnerability of Soft using SonarQube and Fortify",
        environment:"Cloud AWS",
        skills: [
          {description:"Programming Language:",skills: " Java Spring Boot"},
          {description:"AWS:",skills: " SQS,ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, DynamoDB"},
          {description:"Monitoring:",skills: " ClaudWatch, Promepheus and Grafana"},
          {description: "FrameWork BackEnd:",skills: "Spring Boot, Spring MVC, resilience4j"},
          {description:"Broker:",skills: " Apache Kafka"},
          {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
          {description:"Versioning:",skills: " Git, Github"}],
      },
      {
        periodo:"Microservice 02",
        principal:"Developer BackEnd",
        description:  "Microservice on AWS Lambda with python triggered by event in S3, which performs the conversion of positional data file into payload in json format and published in AWS SNS and AWS SQS. Quality control, security and vulnerability of Soft using SonarQube and Fortify",
        environment:"Cloud AWS",
        skills: [
          {description:"Programming Language:",skills: " Python"},
          {description:"AWS:",skills: " Lambda, Bucket S3, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, SQS, SNS"},
          {description:"Pipeline:",skills: " CI/CD"},
          {description:"Versioning:",skills: " Git, Github"}],
      },
      {
        periodo:"Microservice 03",
        principal:"Developer BackEnd",
        description:  "Microservice in Java Spring Boot with spring-Kafka triggered by event in Apache Kafka, the message in json format and published in AWS SQS, with idempotency control, resilience(resilience4j retry), monitoring in ClaudWatch, Promepheus and Grafana.Tests with JUnit and Mockito, Quality control, security and vulnerability of Soft using SonarQube and Fortify",
        environment:"Cloud AWS",
        skills: [
          {description:"Programming Language:",skills: " Java Spring Boot"},
          {description:"AWS:",skills: " SQS,ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch"},
          {description:"Monitoring:",skills: " ClaudWatch, Promepheus and Grafana"},
          {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, resilience4j"},
          {description:"Broker:",skills: " Apache Kafka"},
          {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
          {description:"Versioning:",skills: " Git, Github"}],
      },
      {
        periodo:"Microservice 04",
        principal:"Developer BackEnd",
        description:  "Microservice on AWS Lambda with python triggered by event in S3, which performs the conversion of positional data file into payload in json format and published in AWS SQS. Quality control, security and vulnerability of Soft using SonarQube and Fortify",
        environment:"Cloud AWS",
        skills: [
          {description:"Programming Language:",skills: " Python"},
          {description:"AWS:",skills: " Lambda, Bucket S3, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, SQS"},
          {description:"Pipeline:",skills: " CI/CD"},
          {description:"Versioning:",skills: " Git, Github"}],
      },

    ]
  },
  {
    periodo: "January/2009 - November/2021",
    company: "Tecstart-Serviços",
    principal: "Architect, software engineer",
    description: "Partner of the company with 12 years of activities with a focal point in the development of applications for corporate clients such as medical clinics and electronic maintenance company, he exercised the function of specialized consulting accompanying clients in the gathering of requirements, choice of the best technology applied to their needs and in the application development",
     skills: [
      {description:"Programming Language:",skills: " java, C#, Delphi"},
      {description: "FrameWork:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data,Spring Web,.NetFramwork, VRaptor, JSP, PrimeFaces, JSF, JPA-Hibernate"},
      {description: "FrameWork FrontEnd:",skills: " Angular, React"},
      {description: "WEB:",skills: " CSS, Html"},
      {description:"Data Base:",skills: " Mysql, PostgreSQL, MongoDB"},
      {description:"Versioning:",skills: " Git, Github"}],
    activeExperience: [
      {
        periodo:"2021",
        principal: "Developer FullStack",
        description: "Outsourced development of an application for a software company, with the purpose of registering and controlling the fleet of municipal vehicles. Main activities: vehicle registration, supply control, travel route control, maintenance control and reports",
        environment:"Java Spring Boot, React",
        skills: [
          {description:"Programming Language:",skills: " java"},
          {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data, Spring Web,  JPA-Hibernate"},
          {description:"FrameWork FrontEnd:",skills: " React"},
          {description:"WEB:",skills: " CSS, Html"},
          {description:"Data Base:",skills: " PostgreSQL"},
          {description:"Versioning: ",skills: " Git, Github"}],
      },
       {
        periodo:"2020",
        principal: "Developer FullStack",
        description: "Modernization, application technology migration to an electronic maintenance company to manage internal activities in the financial, inventory and CRM sectors. Main activities: employee registration, customer registration, supplier registration, product and equipment registration, accounts payable and receivable, cash flow, accounting control, order of services, reports.",
        environment:"Java Spring Boot, Angular",
        skills: [
          {description:"Programming Language:",skills: " java"},
          {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data,Spring Web, JPA-Hibernate"},
          {description:"FrameWork FrontEnd:",skills: " Angular"},
          {description:"WEB:",skills: " JavaScript, CSS, Html, JQuery"},
          {description:"Data Base:",skills: " PostgreSQL, MongoDB"},
          {description:"Versioning:",skills: " Git, Github"}],
      },
      {
        periodo:"2019",
        principal: "Developer",
        description: "Application development engineering for Medical Clinics. Main activity: developing Print Server software that communicates with Tomography, Magnetic Resonance and Ultrasound equipment using DICOM protocol for paper prints, allowing customization of print layouts and image quality correction (contrast, brightness and gamma).",
        environment:"Windows",
        skills: [
          {description:"Programming Language:",skills: " C#"},
          {description:"Framework:",skills: " .NetFramwork"}],
      },
      {
        periodo:"2011",
        principal: "Developer",
        description: "Application development engineering for an electronic maintenance company to manage internal activities in the financial, inventory and CRM sectors. Main activities: employee registration, customer registration, supplier registration, product and equipment registration, accounts payable and receivable, cash flow, accounting control, order of services, reports.",
        environment:"Java, Apache Tomcat",
        skills: [
          {description:"Programming Language:",skills: " Java2EE"},
          {description:"FrameWork:",skills: " VRaptor, JSP, PrimeFaces, JSF, JPA-Hibernate"},
          {description:"WEB:",skills: " JavaScript, CSS, Html, JQuery"},
          {description:"Data Base:",skills: " Mysql"}],
      },{
        periodo:"2009",
        principal: "Developer",
        description: "Application engineering and development for a religious institution, Main functionalities: registration of members, registration of departments, registration of cost centers, registering the receipt of amounts from members, cash flow controls, accounts payable and receivable, providing various reports.",
        environment:"Windows",
        skills: [
          {description:"Programming Language:",skills: " Delphi"},
          {description:"Data Base:",skills: " Mysql"}],
      }
    ]
  }
]
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
  experiences:experiences,
  interests:
    'technological innovations, learning new languages, travel, music, learning new things',
  image: './assets/images/users/user-4.jpg',
  email: 'marcelo_maccedo01@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/marcelo-macedo-98154433/',
  github: 'https://github.com/MarceloMacedo02/',
  aboutme:
    'Analyst, architect and systems developer, with more than 15 years working in the market, enthusiastic about technology in constant evolution. I always work with the aim of optimizing resources and good development and governance practices, obtaining results and products aligned with the business objectives, such as delivering values. I value teamwork following practices, and always motivated to build systems with innovative technologies.',
};
