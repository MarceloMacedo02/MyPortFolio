import { Experience,ActiveExperience,Certification,Course,Education,GroupSkills,Person,Interest,Skills,SkillsExperience } from "./person";

const experiences: Experience[] = [

    {
      periodo: "Janeiro/2022 - Outubro/2022",
      company: "GFT Brasil",
      principal: "AWS Builder - Desenvolvedor de aplicativos AWS",
      description: "Empresa de consultoria AWS no setor financeiro, quando adquiri duas certificações AWS,"
      +" atuei no projeto MAP na atividade de aceleração, modernização e migração de alguns serviços do mainframe do banco para a nuvem AWS,"+
      " como desenvolvedor participei reuniões com times do banco e AWS para desenvolvimento de aplicações que atendessem o"+
      " processo de migração de necessidades com melhores práticas de cloud Atividade 100% remota com cerimônias Scrum com jira, "+
      "com entrega dos MVP's programados nas Sprints do backlog. Controle de qualidade, Tests Unitários JUnit, Mockito, segurança e vulnerabilidade de Soft usando SonarQube e Fortify",
      skills: [
        {description:"Linguagem de programação:",skills: " Java Spring Boot, Python"},
        {description:"AWS:",skills: " Lambda, Bucket S3, SNS, SQS, ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, DynamoDB"},
        {description:"Monitoramento:",skills: " ClaudWatch, Promepheus and Grafana"},
        {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, resilience4j"},
        {description:"Broker:",skills: " Apache Kafka"},
        {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
        {description:"Metodologia Ágil:",skills: " Spring, Kanban"},
        {description:"Versões:",skills: " Git, Github"}],
      activeExperience: [
        {
          periodo:"Microservice 01",
          principal:"Desenvolvedor BackEnd",
          description:  "Microservice em Java Spring Boot acionado por eventos de mensagem publicados em uma fila SQS, a mensagem em formato json é convertida em um objeto enriquecido por regras de negócio, atualizado ou inserido no banco de dados DynamoDB, com controle de idempotência, resiliência(resilience4j retry ), disponível para consulta por requisições Rest API, monitoramento em ClaudWatch, Promepheus e Grafana.Testes com JUnit e Mockito, Controle de qualidade, segurança e vulnerabilidade de Soft utilizando SonarQube e Fortify",
          environment:"Cloud AWS",
          skills: [
            {description:"Linguagem de programação:",skills: " Java Spring Boot"},
            {description:"AWS:",skills: " SQS,ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, DynamoDB"},
            {description:"Monitoramento:",skills: " ClaudWatch, Promepheus and Grafana"},
            {description: "FrameWork BackEnd:",skills: "Spring Boot, Spring MVC, resilience4j"},
            {description:"Broker:",skills: " Apache Kafka"},
            {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
            {description:"Versões:",skills: " Git, Github"}],
        },
        {
          periodo:"Microservice 02",
          principal:"Desenvolvedor BackEnd",
          description:  "Microservice em AWS Lambda com python disparado por evento em S3, que realiza a conversão de arquivo de dados posicionais em payload em formato json e publicado em AWS SNS e AWS SQS. Controle de qualidade, segurança e vulnerabilidade do Soft utilizando SonarQube e Fortify",
          environment:"Cloud AWS",
          skills: [
            {description:"Linguagem de programação:",skills: " Python"},
            {description:"AWS:",skills: " Lambda, Bucket S3, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, SQS, SNS"},
            {description:"Pipeline:",skills: " CI/CD"},
            {description:"Versões:",skills: " Git, Github"}],
        },
        {
          periodo:"Microservice 03",
          principal:"Desenvolvedor BackEnd",
          description:  "Microservice em Java Spring Boot com spring-Kafka acionado por evento em Apache Kafka,"+
          " mensagem em formato json e publicado em AWS SQS, com controle de idempotência, resiliência(resilience4j retry)",
          // , Monitoramento em ClaudWatch, Promepheus e Grafana.Testes com JUnit e Mockito, Controle de qualidade, segurança e vulnerabilidade do Soft usando SonarQube e Fortify",
          environment:"Cloud AWS",
          skills: [
            {description:"Linguagem de programação:",skills: " Java Spring Boot"},
            {description:"AWS:",skills: " SQS,ECS, CloudFormation, Well-Architect, Secret Maneger, CloudWatch"},
            {description:"Monitoramento:",skills: " ClaudWatch, Promepheus and Grafana"},
            {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, resilience4j"},
            {description:"Broker:",skills: " Apache Kafka"},
            {description:"Pipeline:",skills: " CI/CD, WorkFlow"},
            {description:"Versões:",skills: " Git, Github"}],
        },
        {
          periodo:"Microservice 04",
          principal:"Desenvolvedor BackEnd",
          description:  "Microservice em AWS Lambda com python disparado por evento em S3, que realiza a conversão de arquivo de dados posicionais em payload em formato json e publicado em AWS SQS. Controle de qualidade, segurança e vulnerabilidade do Soft utilizando SonarQube e Fortify",
          environment:"Cloud AWS",
          skills: [
            {description:"Linguagem de programação:",skills: " Python"},
            {description:"AWS:",skills: " Lambda, Bucket S3, CloudFormation, Well-Architect, Secret Maneger, CloudWatch, SQS"},
            {description:"Pipeline:",skills: " CI/CD"},
            {description:"Versões:",skills: " Git, Github"}],
        },

      ]
    },
    {
      periodo: "January/2009 - November/2021",
      company: "Tecstart-Serviços",
      principal: "Arquiteto, engenheiro de software",
      description: "Sócio da empresa com 12 anos de atividades com foco no desenvolvimento de aplicações para clientes corporativos como clínicas médicas e empresa de manutenção eletrônica, exerceu a função de consultoria especializada acompanhando clientes no levantamento de requisitos, escolha da melhor tecnologia aplicada às suas necessidades e no desenvolvimento de aplicativos",
      skills: [
        {description:"Linguagem de programação:",skills: " java, C#, Delphi"},
        {description: "FrameWork:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data,Spring Web,.NetFramwork, VRaptor, JSP, PrimeFaces, JSF, JPA-Hibernate"},
        {description: "FrameWork FrontEnd:",skills: " Angular, React"},
        {description: "WEB:",skills: " CSS, Html"},
        {description:"Data Base:",skills: " Mysql, PostgreSQL, MongoDB"},
        {description:"Versões:",skills: " Git, Github"}],
      activeExperience: [
        {
          periodo:"2021",
          principal: "Desenvolvedor  FullStack",
          description: "Desenvolvimento terceirizado de aplicativo para empresa de software, com a finalidade de cadastro e controle da frota de veículos municipais. Principais atividades: cadastro de veículos, controle de abastecimento, controle de roteiros de viagens, controle de manutenção e relatórios",
          environment:"Java Spring Boot, React",
          skills: [
            {description:"Linguagem de programação:",skills: " java"},
            {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data, Spring Web,  JPA-Hibernate"},
            {description:"FrameWork FrontEnd:",skills: " React"},
            {description:"WEB:",skills: " CSS, Html"},
            {description:"Data Base:",skills: " PostgreSQL"},
            {description:"Versões: ",skills: " Git, Github"}],
        },
         {
          periodo:"2020",
          principal: "Desenvolvedor  FullStack",
          description: "Modernização, migração de tecnologia de aplicação para empresa de manutenção eletrônica para gerenciamento das atividades internas dos setores financeiro, estoque e CRM. Principais atividades: cadastro de funcionários, cadastro de clientes, cadastro de fornecedores, cadastro de produtos e equipamentos, contas a pagar e receber, fluxo de caixa, contabilidade controle, ordem de serviços, relatórios.",
          environment:"Java Spring Boot, Angular",
          skills: [
            {description:"Linguagem de programação:",skills: " java"},
            {description:"FrameWork BackEnd:",skills: " Spring Boot, Spring MVC, Spring Security, Spring Data,Spring Web, JPA-Hibernate"},
            {description:"FrameWork FrontEnd:",skills: " Angular"},
            {description:"WEB:",skills: " JavaScript, CSS, Html, JQuery"},
            {description:"Data Base:",skills: " PostgreSQL, MongoDB"},
            {description:"Versões:",skills: " Git, Github"}],
        },
        {
          periodo:"2019",
          principal: "Desenvolvedor ",
          description: "Engenharia de desenvolvimento de aplicações para Clínicas Médicas. Atividade principal: desenvolvimento de software Print Server que se comunica com equipamentos de Tomografia, Ressonância Magnética e Ultrassom utilizando protocolo DICOM para impressões em papel, permitindo customização de layouts de impressão e correção de qualidade de imagem (contraste, brilho e gama)." ,
          environment:"Windows",
          skills: [
            {description:"Linguagem de programação:",skills: " C#"},
            {description:"Framework:",skills: " .NetFramwork"}],
        },
        {
          periodo:"2011",
          principal: "Desenvolvedor ",
          description: "Engenharia de desenvolvimento de aplicações para empresa de manutenção eletrônica para gerenciamento das atividades internas dos setores financeiro, estoque e CRM. Principais atividades: cadastro de funcionários, cadastro de clientes, cadastro de fornecedores, cadastro de produtos e equipamentos, contas a pagar e receber, fluxo de caixa, controle contábil, ordem de serviços, relatórios.",
          environment:"Java, Apache Tomcat",
          skills: [
            {description:"Linguagem de programação:",skills: " Java2EE"},
            {description:"FrameWork:",skills: " VRaptor, JSP, PrimeFaces, JSF, JPA-Hibernate"},
            {description:"WEB:",skills: " JavaScript, CSS, Html, JQuery"},
            {description:"Data Base:",skills: " Mysql"}],
        },{
          periodo:"2009",
          principal: "Desenvolvedor ",
          description: "Engenharia de aplicação e desenvolvimento para instituição religiosa, Principais funcionalidades: cadastro de associados, cadastro de departamentos, cadastro de centros de custos, registro de recebimento de valores de associados, controles de fluxo de caixa, contas a pagar e receber, disponibilização de relatórios diversos.",
          environment:"Windows",
          skills: [
            {description:"Linguagem de programação:",skills: " Delphi"},
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
      'Conhecimento de conceitos, modelos e serviços de computação em nuvem, como nuvem pública, privada e híbrida, além de infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS). ',
    },
    {
      periodo: 'March 11, 2022',
      certification: 'AWS Certified Desenvolvedor  – Associate',
      link: 'https://www.credly.com/badges/0ab30099-75af-40c6-8afe-d1b492c53e65/linked_in_profile',
      description:
      'Os profissionais do Desenvolvedor têm um ou mais anos de experiência prática no desenvolvimento e manutenção de um aplicativo baseado em AWS. Habilidades Validadas por Certificação.',
      },
    {
      periodo: 'February 04, 2022',
      certification: 'AWS Certified Cloud Practitioner',
      link: 'https://www.credly.com/badges/f7fb1e75-b2f6-4e1e-8aa2-ea32615e3970/linked_in_profile',
      description:
      'O AWS Certified Cloud Practitioner fornece uma compreensão básica dos conceitos, serviços e terminologia da Nuvem AWS.',
     },
  ];
  const educations: Education[] = [
    {
      periodo: 'FVb/2012 - Jul/2015',
      instituition: 'Unileão Centro Universitário',
      courso: 'Análise e desenvolvimento',
      description:
      'Curso de graduação para profissionais especializados no desenvolvimento de programas utilizando códigos e linguagens de programação para criação de sistemas para celulares, internet, tablets, etc. Utilizando recursos de administração de banco de dados, redes e outros.',},

    {
      periodo: '1992 - 1996',
      instituition:
        'IFCE - Instituto Federal de Educação, Ciência e Tecnologia do Ceará ',
      courso: 'Telecomunicações',
      description:
      'O profissional capacitado é o responsável pela instalação, operação e manutenção dos sistemas de telecomunicações. Seguindo as normas e estratégias técnicas de qualidade, saúde, segurança e preservação do meio ambiente.',
    },  ];
  /*
  Arquitetura de soluções



  */
  const groupSkills: GroupSkills[] = [
    {
      name: 'Solution',
      skills: [
        { skill: ' Arquitetura', percent: 100 },
        { skill: 'Microservviços', percent: 100 },
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
      name: 'Metodologia Ágil',
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
    title: 'Full Stack Desenvolvedor  - Desenvolvedor  AWS',
    date_birth: '31/July',
    nationality: 'Brasileiro',
    phone: '+55 88 994635883',
    educations: educations,
    certifications: certifications,
    cousers: courses,
    groupSkills: groupSkills,
    values: 'Família, organização, lealdade, cuidado, pontualidade,',
    experiences:experiences,
    interests:
    'inovações tecnológicas, aprender novos idiomas, viajar, música, aprender coisas novas',
    image: './assets/images/users/user-4.jpg',
    email: 'marcelo_maccedo01@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/marcelo-macedo-98154433/',
    github: 'https://github.com/MarceloMacedo02/',
    aboutme:
    'Analista, arquiteto e desenvolvedor de sistemas, com mais de 15 anos de mercado, apaixonado por tecnologia em constante evolução. Trabalho sempre com o objetivo de otimizar recursos e boas práticas de desenvolvimento e governança, obtendo resultados e produtos alinhados aos objetivos do negócio, como a entrega de valores. Valorizo o trabalho em equipe seguindo práticas, e sempre motivado a construir sistemas com tecnologias inovadoras.',
};
