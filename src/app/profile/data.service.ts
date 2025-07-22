import { Injectable } from '@angular/core';
import { Experience } from '../types';

@Injectable({
    providedIn: 'root'
})
export class DataService {

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
        ['Web Technologies', ['Angular', 'Typescript', 'NGRX', 'RxJs', 'NX', 'JavaScript', 'ASP.Net MVC', 'ASP.Net', 'HTML5', 'Node Js', 'JQuery',
            'AJAX', 'JSON', 'CSS3', 'SCSS', 'Kendo(telerik)', 'Angular Material', 'PrimeNG', 'Bootstrap']],
        ['Languages', ['TypeScript', 'JavaScript', 'C#', 'VB.NET', 'PowerShell']],
        ['SOA', ['WCF', '.NET Core API', 'Micro Services', 'Web services', 'SOAP', 'REST', 'WSDL', 'XSD']],
        ['Database', ['SQL Server', 'Oracle', 'PostgreSQL']],
        ['Testing', ['Cypress', 'Protractor', 'Selenium', 'NUnit', 'XUnit', 'Jest', 'Karma', 'Jasmine', 'Mocha']],
        ['Cloud', ['AWS', 'AWS   S3', 'EC2', 'Lamda', 'Azure App services', 'Azure SQL', 'Docker', 'Kubernetes', 'Azure DevOps']],
        ['IDE', ['Visual Studio Code', 'IntelliJ', 'Visual Studio.Net', 'PowerShell ISE']],
        ['Version Control', ['GIT', 'TFS', 'VSS', 'Perforce']],
        ['Tools', ['Atlassian', 'Jira', 'Confluence', 'Fortify', 'SecureAssist']]
    ]);

    experienceList: Experience[] = [
        {
            id: 1,
            client: 'CapitalOne, TX - Remote',
            timeline: 'Nov-2022 to Till Date',
            role: 'Senior UI Developer',
            responsibilities: [
                'Designed and Developed responsive and user-friendly web interface using Angular 14/16/18, TypeScript, HTML5, CSS3, SCSS and JavaScript.',
                'Involved in design and development of reusable UI library using Angular Component Dev Kit (CDK).',
                'Re Architect the current Angular application with Dynamic Forms and Dynamic components for maximum scalability.',
                'Developed dynamic form module using angular reactive forms and custom control libraries.',
                'Developed complex controls like multi select tree dropdown, Typeahead search, Multi select list, Multi select lookup, Single select list, Single select lookup and registered to the dynamic form module.',
                'Created custom, general modules and components which extend the elements and modules of core Angular.',
                'Migrated the application from Angular 14 to angular 16/18.',
                'Created State Management module using Observable services with RxJs subjects and Observables.',
                'Migrated State Management module with Signal Store and Signals.',
                'Following the WCAG 2.1 guidelines for web accessibility for developing the UI components.',
                'Worked on unit tests using Karma, Jasmine, Angular testing utilities like TestBed, ComponentFixture.',
                'Developed and set up Test Automation using Cypress, Jest and Jasmine.',
                'Collaborated with UX/UI designers to translate wireframes and mockups into functional web pages.',
                'Optimize the application for maximum speed and scalability, ensuring high performance across different browsers and devices.',
                'Developed containers, and deployed applications using Docker.',
                'Conduct code reviews and provide constructive feedback to maintain code quality and best practices.',
                'Troubleshoot and debug frontend issues, working closely with the backend team to resolve integration problems.'
            ],
            environment: 'Angular 14/16/18, RxJS, Typescript, JavaScript, Node Js, AWS S3, GIT, SCSS, HTML5, Docker, Visual Studio Code, Sonar Cloud'
        },
        {
            id: 2,
            client: 'DocuSign, SFO, CA - Remote',
            timeline: 'Nov - 2021 to Oct- 2022',
            role: 'Senior Web Developer',
            responsibilities: [
                'Developed reporting and monitoring dashboard using Angular, Typescript, RxJs, CSS and GraphQL Apollo client.',
                'Developed API for Ecommerce application using GraphQL, .Net Core, C#.',
                'Migrated GraphQL version from 2.3 to 4.5.',
                'Developed build and deployment script using Powershell for Jenkins CI/CD pipelines.',
                'Worked on unit tests using Jest, Jasmine, Angular testing utilities like TestBed, ComponentFixture.',
                'Worked on the integration of backend API developed with ASP.Net core, C# and GraphQL.',
                'Developed micro services using .Net core and deployed to Kubernetes using Azure Kubernetes Service.',
                'Automated the Graphql API static documentation generation using SpectaQL and PowerShell scripts.',
                'Involved in release procedures, coding standard, documentation protocol and change management procedures.',
                'Coordinating with application partner technical contacts, troubleshooting and resolving connectivity issues, identifying Certificate/Permissions problems.'],
            environment: 'Angular 12, NGRX, RxJS, Typescript, JavaScript, PrimeNG, GIT, Jenkins, Visual Studio Code, Micro Services, Docker, Kubernetes, Terraform, Helm, PostMan, GraphQL, SpectaQL'
        },
        {
            id: 3,
            client: 'BP, Houston, TX',
            timeline: 'Apr-2021 to Oct-2021',
            role: 'Senior UI Developer',
            responsibilities: [
                'Developed UI using Angular, Typescript, HTML5, SCSS, and Bootstrap.',
                'Involved in design and development of reusable UI components using Kendo, PrimeNG, and Keyline.',
                'Migrate the application to Angular12 (TsLint to ESLint, Apollo-client to @Apollo/client3, GraphQL, AWS sdk)',
                'Worked on authentication module using AWS Cognito, aws-amplify, amazon-cognito-identity-js.',
                'Redesigned the shared data access library with latest apollo/client3, apollo-angular, GraphQL libraries.',
                'Utilized Nx to develop, test, build, scale and migrate Angular applications with modern tools like Jest, Cypress, ESLint, NgRx.',
                'Followed the WCAG 2.1 guidelines for web accessibility for developing the UI components.',
                'Worked on security vulnerabilities, including SQL Injection, Buffer Overflows, Cross-Site Scripting, Cross-Site Request Forgery reported by SAST and DAST tools.',
                'Used Atlassian suite of tools including JIRA, Confluence, and Bitbucket.',
                'Deployed application in AWS S3, EC2 using Atlassian Bitbucket CI/CD pipeline.',
                'Worked on unit tests using Jest, Jasmine, Angular testing utilities like TestBed, ComponentFixture.',
                'Developed and set up Test Automation using Cypress, Jest and Jasmine.',
                'Worked with UI/UX designers and translated UI/UX designs into code.',
                'Participates in code review, refining linting rules, fixing sonarcloud and codesmell fixes.',
                'Following Agile practices with CI/CD concepts and Unit Testing.',
                'Participates in external planning processes and collaborates with scrum masters to prioritize development.'],
            environment: 'Angular 11/12, NGRX, RxJS, Typescript, JavaScript, GraphQL, Apollo/Client, AWS SDK, Kendo, PrimeNG, AWS S3, GIT, BitBucket, SCSS, HTML5, Visual Studio Code, Sonar Cloud.',
        },
        {
            id: 4,
            client: 'Wells Fargo, San Leandro, CA',
            timeline: 'Dec-2009 to Apr 2021',
            role: 'Senior Software Engineer',
            responsibilities: [
                'Designed and Developed UI layer using Angular 2/4/6/8/10, NgRx, RxJS, ASP.Net MVC, Typescript, JavaScript, ES6, HTML 5, Angular Material, Bootstrap and CSS3.',
                'Experience in state management using Angular Services with RxJS subjects, Observables and NGRX.',
                'Utilized Angular CLI, Angular Schematics and Visual Studio SPA application (Angular) template scaffolding techniques for the development productivity.',
                'Coordinating with UX designer and designing the UI using the UI components Angular Material, Bootstrap and JQuery.',
                'Experience in Angular testing utilities like TestBed, ComponentFixture, and the functions that control the test environment.',
                'Developed Angular applications with advanced techniques like Dynamic Components, Angular Elements, Dynamic Forms, Angular Service Worker and App Shell.',
                'Worked in Test automation frameworks and E2E tests with (Selenium, NUnit, .Net) & (Protractor, Karma, Jasmine).',
                'Experience in making design and technical decisions for Angular Single Page applications.',
                'Developed Angular Libraries to share across the projects.',
                'Worked on back end layer using C#, ASP.Net Core API, Node JS and Express Server.',
                'Developed Data Access Layer using ADO.Net, Entity Framework, .Net Core Entity Framework, Dapper.',
                'Designed and Developed Middle Layer using WCF Services, Windows Service, C# and IBM Web Sphere MQ Client.',
                'Migrated the legacy web services to ASP.Net core API (Micro Services), Ocelot Gateway and deployed in Docker.',
                'Developed DB objects like stored procedures and Functions, Complex Queries using SQL Server (2005/2012/2017) and Azure SQL.',
                'Solely architected, designed and developed one of the middle layers (ATM Response Manager) for the ATM.',
                'Worked closely with Upstream and Downstream application partners and integrated the (SOA) applications and maintained application programming Interfaces (API), schemas and security standards.',
                'Designed and developed the parsing engine for Raw ATM messages and Tablet usage data from the upstream applications.',
                'Developed test simulator tool (E2E testing) for the ATM response messages (SOAP).',
                'Worked on .Net Authentication (Windows/Forms/Certificate) and Authorization, securing confidential data with encryption, secure tokens JWT, OAUTH.',
                'Worked on PowerShell scripts for NDM file transfer and connected direct scheduled tasks.',
                'Worked on the integration of MicroFocus Voltage and implemented encryption methods (FPE) for the PII data.',
                'Implemented certificates, SSL/TLS/TLS1.2, IIS configuration with secure channel.',
                'Used Web Content Accessibility Guidelines (WCAG) 2.1 for the design and development of Angular templates and web Pages to achieve the ADA compliance.',
                'Upgraded and improved the code time to time (Angular 2/4/6/8/10) as per the Enterprise guidelines.',
                'Implemented enterprise standards in terms of security, auditing and remediate vulnerabilities spotted by DAST and SAST tools.',
                'Implement Kafka streaming to send data to downstream applications.',
                'Managing excellent working relationships with Business stakeholders and Product owners.'
            ],
            environment: 'Angular 2/4/6/8/10, Angular Material, NGRX, RxJs, .Net Framework, .Net Core Web API, C#, ASP.Net Core MVC, WCF Service, Windows Service, SQL Server, PostgreSQL, IIS, Azure Web Apps, Azure SQL, Azure Functions, Web Sphere MQ, Kafka, HTML5, TypeScript, JavaScript, Bootstrap, JSON, CSS3, SASS, Jasmine, Karma, Protractor, Selenium, XML, Entity Framework, Dapper, Visual Studio, PowerShell scripts, Software Factories, Guidance Package, SecureAssist and Fortify.'
        },
        {
            id: 5,
            client: 'Center to Promote HealthCare Access, Sacramento, CA',
            timeline: 'Jan-2009 to Dec-2009',
            role: 'Senior Software Engineer',
            responsibilities: [
                'Developed the GUI with ASP.Net, AJAX, JQuery, JSON, Java Script and XSLT using Visual Studio 2008.',
                'Studied the existing applications in ASP and migrated to ASP.Net 3.5.',
                'Implemented Cross Browser support in the web application for Firefox, Safari, IE6 and Opera.',
                'Migrated the ASP.Net web application to ASP.Net MVC application.',
                'Developed Custom Controls and User Controls using ASP.Net and C#.',
                'Developed stored procedures and Functions in SQL Server-2005.',
                'Implemented Globalization in web application.',
                'Involved in the Performance tuning of the Web Application.'
            ],
            environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
        },
        {
            id: 6,
            client: 'SonicWALL Inc., Sunnyvale, CA',
            timeline: 'Nov-2008 to Dec-2008',
            role: 'Senior Software Engineer',
            responsibilities: [
                'Developed the GUI with ASP.Net, AJAX, JQuery, JSON, Java Script and XSLT using Visual Studio 2008.',
                'Studied the existing applications in ASP and migrated to ASP.Net 3.5.',
                'Implemented Cross Browser support in the web application for Firefox, Safari, IE6 and Opera.',
                'Migrated the ASP.Net web application to ASP.Net MVC application.',
                'Developed Custom Controls and User Controls using ASP.Net and C#.',
                'Developed stored procedures and Functions in SQL Server-2005.',
                'Implemented Globalization in web application.',
                'Involved in the Performance tuning of the Web Application.'
            ],
            environment: '.Net Framework 3.5, ASP.Net, C#, ASP, SQL Server-2005, MSTS, SSRS, Visual source safe (VSS), LINQ, AJAX, JQuery, JSON, XML, XSLT, and JavaScript'
        },
        {
            id: 7,
            client: 'Xerox, Chennai, India',
            timeline: 'Dec-2006 to Oct-2007',
            role: 'Senior Team Member',
            responsibilities: [
                'Analyzing the requirement with Onsite members and developing Low Level design.',
                'Presentation layer (GUI) development using Web Forms, JavaScript and CSS.',
                'Designed and developed the Business Layer using C# and developed the Data Access Layer using Application Blocks.',
                'Applied Design Patterns (Factory, Singleton, and Observer) in component development.',
                'Developed stored procedures and Functions and Packages Using SQL SERVER 2005 and Oracle 10g.',
                'Modified the Data Access Layer to connect to Oracle DB with ODP.Net.',
                'Designed and developed security module using .Net membership objects and Login controls.'
            ],
            environment: '.Net Framework 2.0, ASP.Net, VB.Net, C#, Web Services, Oracle-10g, ODP.Net, SQL Server-2005, ADO.Net, SSRS, SSIS, AJAX and JavaScript'
        },
        {
            id: 8,
            client: 'TRW Automotives, Chennai, India',
            timeline: 'Oct-2005 to Oct-2006',
            role: 'Technical Lead',
            responsibilities: [
                'Coordinated development groups (Onshore/ Offshore).',
                'Developed Presentation layer (GUI) using ASP.Net Web Forms, AJAX, Java Script and CSS.',
                'Worked on Unit Test cases and System Test Plan.',
                'Developed PL SQL Stored Procedures, functions and Packages using PL/SQL Developer.',
                'Developed Custom HTTPHandlers and HTTPModules for handling XMLHTTP requests.',
                'Developed Web Services that transact data via XML.',
                'Designed the Business Entities with XML Serialization using IXMLSerializer.',
                'Conducted code review using FXCOP to ensure the coding standard.'
            ],
            environment: '.Net Framework 1.1, ASP.Net, C#, Web Services, Oracle-9i, AJAX, VSS, Java Script and CSS'
        },
        {
            id: 9,
            client: 'Chevron, Chennai, India',
            timeline: 'April-2005 to Oct-2005',
            role: 'Team Leader',
            responsibilities: [
                'Developed Use Cases, Detailed Design and Low Level Design.',
                'Developed Presentation layer (GUI) using ASP.Net Web Forms, AJAX, Java Script and CSS.',
                'Designed and developed the Business Layer using C# and developed the Data Access Layer using Application Blocks.',
                'Applied Design Patterns (Factory, Singleton, and Observer) in component development.',
                'Developed stored procedures and Functions and Packages Using SQL SERVER 2005 and Oracle 10g.',
                'Modified the Data Access Layer to connect to Oracle DB with ODP.Net.',
                'Designed and developed security module using .Net membership objects and Login controls.'
            ],
            environment: '.Net Framework 2.0, ASP.Net, VB.Net, C#, Web Services, Oracle-10g, ODP.Net, SQL Server-2005, ADO.Net, SSRS, SSIS, AJAX and JavaScript'
        },
        {
            id: 10,
            client: 'VuCom Inc., Chennai, India',
            timeline: 'Aug-2004 to Mar-2005',
            role: 'Team Leader',
            responsibilities: [
                'Developed the GUI, Middle Layer and Data Layer.',
                'Implemented MSMQ in message communication with remote client.',
                'Developed components with Asynchronous Callbacks using Delegates.'
            ],
            environment: 'VB. Net, ASP, SQL-Server-2000, WINFORMS, Web Service, Windows Service, MSMQ, SOAP, XML, XSL-FO'
        },
        {
            id: 11,
            client: 'Somali Telecom Group (STG), Dubai',
            timeline: 'May-2004 to July-2004',
            role: 'Senior Software Developer',
            responsibilities: [
                'Solely worked on the whole life cycle of the project (requirement, Design, Development, Testing and Deployment).'
            ],
            environment: '.Net Framework 1.1, C#, WINFORMS, Remoting, Crystal Report 8 and SQL-Server 2000'
        },
        {
            id: 12,
            client: 'Khosis Inc, Chennai, India',
            timeline: 'Feb-2004 to April-2004',
            role: 'Senior Software Engineer',
            responsibilities: [
                'Worked on GUI, Data access layers and DB objects like stored procedures and Functions using SQL Server2000.'
            ],
            environment: '.Net Framework 1.1, ASP. Net, VB.Net, JavaScript, CSS, ADO.Net, SQL-Server-2000 and XML'
        },
        {
            id: 13,
            client: 'VuCom Inc., (LAPD), Chennai, India',
            timeline: 'June-2003 to Jan-2004',
            role: 'Senior Software Engineer',
            responsibilities: [
                'Migrated existing VB6 application to VB.Net, Worked on DB objects using SQL Server-2000'
            ],
            environment: 'VB. Net (WINFORMS), ADO.Net, VB 6, SQL Server 2000, Crystal Report-9, Infragistics Controls'
        }
    ];

}