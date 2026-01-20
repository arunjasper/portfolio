import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, Project } from '../types';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  resumeurl = "https://docs.google.com/document/d/1ZxUQ5s8nKLnp_vjdQMQYPxO6AYipDx3eUhiZ5KOr6uI/edit?tab=t.0"

  summary: string = `Accomplished Senior Software Engineer with 15+ years’ experience in modern web technologies including Angular, TypeScript, JavaScript and .NET. Expert in architecting scalable applications, responsive UI/UX design, CMS Integration, REST API integration, and AWS deployments. Demonstrated leadership in dynamic, fast-paced environments, driving high-quality project delivery and innovation in both client-facing and internal tools.`;

  summaryList: string[] = [
    'Extensive Experience in Web Applications using Angular, TypeScript, JavaScript, ASP.Net MVC and ASP.Net.',
    'Experience in designing UI Layers using Angular Material, Kendo(telerik), PrimeNG, CSS3, SCSS and Bootstrap.',
    'Deep knowledge in Angular best practices and concepts, server side Rendering using Angular Universal, parallel processing using Web Workers, Lazy loading using Angular Routing, cross cutting concerns using HTTP interceptors, components communication using RxJS Subjects, State Management using NgRx.',
    'Experience in building reusable components, directives, pipes and services using Angular.',
    'Experience in building Single Page Applications(SPA), Progressive Web Applications(PWA) using Angular, Typescript, HTML5, CSS3, SCSS and Bootstrap.',
    'Experience in integrating Angular applications with API using GraphQL, Apollo/Client and Angular-apollo.',
    'Expert knowledge in using Angular CLI, Angular Schematics, scaffolding techniques for development productivity.',
    'Stay up to date with the latest trends and advancements in frontend development, recommending and implementing relevant technologies and tools.Developed UI using Angular, Typescript, HTML5, SCSS, and Bootstrap.',
    'Worked in Test Automation(E2E) using Cypress, Protractor and Selenium.',
    'Worked in various Migration projects like ASP.Net to Angular, ASP.Net to ASP.Net MVC.',
    'Experience in custom components, modules and libraries which extend the elements and modules of core Angular.',
    'Experience with building the infrastructure for serving the front - end app and assets.',
    'Experience in Distributed Applications using Web API, WCF Services, MSMQ and WebSphere MQ.',
    'Deployed applications in AWS using S3, EC2, Lambda and Azure using Web Apps, Azure SQL and Azure functions.',
    'Worked in XML technologies(XML, XSD Schema, XSLT Transformations, XPATH, DTD and DOM).',
    'Developed Stored Procedures, functions and complex queries using SQL Server Management Studio, PL SQL Developer and TOAD.',
    'Expert knowledge in OOP, SOLID Principles, Design Patterns(Dependency Injection, Observer, CQRS, Factory and Singleton) and architectures such as MVC, MVVM, Micro Services.',
    'Experience with software development best practices, including coding standards, code reviews, source control management, build processes, testing and operations.',
    'Experience in maintaining code quality using tools like SonarCloud, HP Fortify, SecureAssist, FXCop.',
    'Experience in updating and version controlling the source code using the tools GIT, TFS, VSS and Perforce.',
    'Experience in using tools like Swagger, Postman and SoapUI for UI and API integration.',
    'Experience using Figma to pass of design deliverables to product other teams',
    'Experience in developing web pages compliance with WCAG 2.1, Section 508, and ADA standards.',
    'Experience with methodologies for software development and delivery like Agile(Scrum) and Waterfall.',
    'Experience in all phases of Software Development Life Cycle(SDLC) & Engineering systems Including Azure DevOps, Source Control, Build, Release & CI / CD pipelines.  ',
    'Experience in using data analytics tools like Splunk, Grafana, AppDynamics and others for application monitoring.'];

  skillsSet: Map<string, string[]> = new Map<string, string[]>([
    ['Web', ['Angular', 'NGRX', 'RxJs', 'NX', 'ASP.Net MVC', 'ASP.Net', 'HTML5', 'Node Js', 'JQuery',
      'AJAX', 'JSON', 'CSS3', 'SCSS', 'Kendo(telerik)', 'Angular Material', 'PrimeNG', 'Bootstrap']],
    ['Languages', ['TypeScript', 'JavaScript', 'C#', 'VB.NET', 'PowerShell', 'Kotlin', 'Java']],
    ['Architectures', ['Server Driven UI (SDUI)', 'Micro Frontends', 'Micro Services', 'Layered', 'RESTful Services', 'WCF Services']],
    ['Build Tools', ['Angular CLI', 'Nx CLI', 'MSBuild', 'Webpack', 'NPM', 'Yarn']],
    ['API', ['GraphQL', 'Apollo/Client', 'ASP.Net Web API', 'WCF Services', 'Web Services', 'RESTful API', 'SOAP']],
    ['Backend', ['Node Js', '.Net Core', '.Net Framework', 'Next Js', 'Express', 'Spring boot']],
    ['Database', ['SQL Server', 'PostgreSQL', 'Oracle', 'Azure SQL', 'Entity Framework', 'Dapper']],
    ['Testing', ['Cypress', 'Protractor', 'Selenium', 'NUnit', 'XUnit', 'Jest', 'Karma', 'Jasmine', 'Mocha']],
    ['Cloud', ['AWS', 'AWS S3', 'EC2', 'Lambda', 'Azure App services', 'Docker', 'Kubernetes', 'Azure DevOps']],
    ['Tools', ['GIT', 'TFS', 'VSS', 'JIRA', 'Confluence', 'Bitbucket', 'Jenkins', 'SonarCloud', 'Fortify', 'Postman', 'Swagger', 'SoapUI']
    ]
  ]);

  experienceList: Experience[] = [
    {
      id: 1,
      client: 'Capital One',
      employer: 'TechSun Soft',
      location: 'Plano, TX',
      timeline: 'Nov-2022 to June-2025',
      role: 'Senior UI Developer',
      responsibilities: [
        'Led the design and development of responsive, user-friendly web interfaces using Angular, TypeScript, HTML5, CSS3, SCSS, and JavaScript.',
        'Architected scalable solutions, including server-driven UI (SDUI) and dynamic forms, to enhance maintainability and user experience.',
        'Developed reusable UI libraries and custom modules, collaborating closely with UX/UI designers to translate wireframes into functional web pages.',
        'Migrated and optimized Angular applications, ensuring high performance and adherence to accessibility standards (WCAG 2.1).',
        'Implemented state management using NgRx, NgRx Signal Store, RxJs and Observable services, and conducted code reviews to maintain best practices.',
        'Utilized modern development tools, including Docker, Node.js, Express, and NX monorepo, to streamline project delivery.',
        'Set up and maintained automated testing with Cypress, Jest, and Jasmine, ensuring robust and reliable releases.',
        'Collaborated with cross-functional teams to troubleshoot, debug, and resolve integration issues, supporting high-quality deliverables.'
      ],
      environment: 'Angular 14/16/18, RxJS, Typescript, JavaScript, Node Js, AWS S3, GIT, SCSS, HTML5, Docker, Visual Studio Code, Sonar Cloud'
    },
    {
      id: 2,
      client: 'DocuSign',
      employer: 'TekValley Inc',
      location: 'San Francisco, CA',
      timeline: 'Nov - 2021 to Oct- 2022',
      role: 'Senior Web Developer',
      responsibilities: [
        'Developed UI layers using React, Redux, and React Hook Form, ensuring seamless and intuitive user experiences.',
        'Built and maintained APIs for eCommerce applications using GraphQL, .NET Core, and C#, supporting robust backend integration.',
        'Led migration of GraphQL versions and automated API documentation, enhancing maintainability and developer productivity.',
        'Developed build and deployment scripts for Jenkins CI/CD pipelines, streamlining release processes.',
        'Coordinated with technical partners to troubleshoot and resolve connectivity and permissions issues, ensuring smooth integrations.',
        'Developed and deployed microservices to Azure Kubernetes Service, supporting scalable and reliable application architecture.',
        'Participated in release procedures, coding standards, and change management to maintain high-quality software delivery.'
      ],
      environment: 'Angular 12, NGRX, RxJS, Typescript, JavaScript, PrimeNG, GIT, Jenkins, Visual Studio Code, Micro Services, Docker, Kubernetes, Terraform, Helm, PostMan, GraphQL, SpectaQL'
    },
    {
      id: 3,
      client: 'BP - British Petroleum',
      employer: 'Apex Systems',
      location: 'Houston, TX',
      timeline: 'Apr-2021 to Oct-2021',
      role: 'Senior UI Developer',
      responsibilities: [
        'Developed and migrated UI components using Angular, TypeScript, HTML5, SCSS, and Bootstrap, ensuring modern and maintainable codebases.',
        'Implemented reusable UI components and state management with NgRx and RxJs, supporting scalable application architecture.',
        'Addressed security vulnerabilities and followed accessibility guidelines (WCAG 2.1) to deliver inclusive user experiences.',
        'Collaborated with UI/UX designers and participated in Agile practices, including code reviews and CI/CD pipelines.',
        'Deployed applications to AWS using Bitbucket CI/CD, ensuring efficient and reliable releases.',
        'Led test automation efforts with Cypress, Jest, and Jasmine, supporting high-quality software delivery.'
      ],
      environment: 'Angular 11/12, NGRX, RxJS, Typescript, JavaScript, GraphQL, Apollo/Client, AWS SDK, Kendo, PrimeNG, AWS S3, GIT, BitBucket, SCSS, HTML5, Visual Studio Code, Sonar Cloud.',
    },
    {
      id: 4,
      client: 'Wells Fargo',
      employer: 'TekValley Inc',
      location: 'San Leandro, CA',
      timeline: 'Dec-2009 to Apr 2021',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Designed and developed UI layers using Angular, ASP.Net MVC, JavaScript, HTML, and Bootstrap for enterprise web applications.',
        'Built backend layers with Node.js, Express, Web API, and .NET Core, integrating with SQL Server and WCF services.',
        'Developed and maintained APIs, schemas, and security standards, ensuring robust and secure integrations.',
        'Led migration of WCF services to .NET Core Web API with microservice architecture, supporting scalability and maintainability.',
        'Implemented automated testing frameworks with Selenium, NUnit, Protractor, and Jasmine for end-to-end quality assurance.',
        'Managed CI/CD pipelines using Azure DevOps and ensured compliance with enterprise security and auditing standards.'
      ],
      environment: 'Angular 2/4/6/8/10, Angular Material, NGRX, RxJs, .Net Framework, .Net Core Web API, C#, ASP.Net Core MVC, WCF Service, Windows Service, SQL Server, PostgreSQL, IIS, Azure Web Apps, Azure SQL, Azure Functions, Web Sphere MQ, Kafka, HTML5, TypeScript, JavaScript, Bootstrap, JSON, CSS3, SASS, Jasmine, Karma, Protractor, Selenium, XML, Entity Framework, Dapper, Visual Studio, PowerShell scripts, Software Factories, Guidance Package, SecureAssist and Fortify.'
    },
    {
      id: 5,
      client: 'Center to Promote HealthCare Access (CPHA)',
      employer: 'CDC Global Services',
      location: 'Sacramento, CA',
      timeline: 'Jan-2009 to Dec-2009',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Developed GUIs using ASP.Net, AJAZX, JQuery, JSON, JavaScript, and XSLT, supporting user-friendly web applications.',
        'Migrated legacy ASP applications to ASP.Net and ASP.Net MVC, enhancing maintainability and performance.',
        'Implemented cross-browser support and globalization features to ensure broad accessibility.',
        'Developed custom controls and optimized stored procedures in SQL Server, improving application efficiency.',
        'Participated in performance tuning and deployment, supporting reliable and scalable solutions.'
      ],
      environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
    },
    {
      id: 6,
      client: 'SonicWALL Inc',
      employer: 'CDC Global Services',
      location: 'Sunnyvale, CA',
      timeline: 'Nov-2008 to Dec-2008',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Migrated legacy ASP and VB Script applications to ASP.Net and C#, modernizing web application architecture.',
        'Enhanced and maintained existing applications, developing GUIs with Web Forms, XSLT, AJAX, JavaScript, and JQuery.',
        'Designed and implemented service layers using WCF Services and developed XML schemas for business entities.',
        'Developed data access layers and SOAP extensions, ensuring secure and validated data transactions.'
      ],
      environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
    },
    {
      id: 7,
      client: 'Xerox',
      employer: 'EDS',
      location: 'Chennai, India',
      timeline: 'Dec-2006 to Oct-2007',
      role: 'Senior Team Member',
      responsibilities: [
        'Analyzed requirements and developed low-level designs for business process web applications.',
        'Developed presentation layers using Web Forms, JavaScript, and CSS, ensuring intuitive user interfaces.',
        'Applied design patterns (Factory, Singleton, Observer) and developed secure modules using .Net membership objects.',
        'Developed reports using SQL Server Reporting Services (SSRS) and integrated Oracle and SQL Server databases.'
      ],
      environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
    },
    {
      id: 8,
      client: 'TRW Automotive',
      employer: 'Satyam Computers',
      location: 'Chennai, India',
      timeline: 'Oct-2005 to Oct-2006',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Coordinated onshore and offshore development teams to deliver scalable web-based systems for supplier communication.',
        'Developed presentation layers using ASP.Net Web Forms, AJAX, JavaScript, and CSS, supporting global user bases.',
        'Designed and implemented business entities with XML serialization and developed web services for data transactions.',
        'Conducted code reviews using FXCOP to ensure adherence to coding standards and best practices.'
      ],
      environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
    },
    {
      id: 9,
      client: 'Chevron',
      employer: 'Satyam Computers',
      location: 'Chennai, India',
      timeline: 'Oct-2005 to Oct-2006',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Coordinated with onshore teams to confirm business requirements and develop detailed design documentation.',
        'Developed GUIs using ASP.Net, HTML, JavaScript, AJAX, and CSS, supporting business process automation.',
        'Designed and implemented business and data access layers, integrating with SQL Server and Oracle databases.',
        'Developed secure authentication modules and generated reports using XML, XSLT, and Excel formats.'
      ],
      environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
    },
  ];

  projects: Project[] = [
    {
      id: 1,
      name: 'e-commerce Website',
      description: 'This website is built using Angular for the frontend and Node.js with Express for the backend. It offers a seamless shopping experience with features like product browsing, user authentication, shopping cart, and payment integration.',
      imgUrl: 'assets/images/projects/e-com.jpeg',
      liveUrl: 'https://e-com-angular-pi.vercel.app/',
      sourceCodeUrl: 'https://github.com/arunjasper/e-com-angular'
    },
    {
      id: 2,
      name: 'Sakila Movie web App',
      description: 'The Sakila Movie web application is built using Angular for the frontend and Spring Boot for the backend. It provides users with an interactive interface to browse and search for movies from the Sakila database. The application features a responsive design, allowing users to access it seamlessly across various devices.',
      imgUrl: 'assets/images/projects/movies.jpeg',
      liveUrl: 'https://myportfolio.com',
      sourceCodeUrl: 'https://github.com/arunjasper/sakila-angular'
    },
    {
      id: 3,
      name: 'Stock Portfolio Website',
      description: 'A stock portfolio management web application that allows users to track their investments, view real-time stock prices, and analyze portfolio performance. Built with Angular and integrated with a third-party stock market API for live data.',
      imgUrl: 'assets/images/projects/stock.jpeg',
      liveUrl: 'https://stock-ang.vercel.app/',
      sourceCodeUrl: 'https://github.com/arunjasper/stock-ang'
    },
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      imgUrl: 'assets/images/projects/portfolio.jpeg',
      liveUrl: 'https://arunjasper.github.io/portfolio/',
      sourceCodeUrl: 'https://github.com/arunjasper/portfolio'
    },
  ]
  getProjects(): Project[] {
    return this.projects;
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return of(this.skillsSet);
  }


  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return of(this.experienceList);
  }

}
