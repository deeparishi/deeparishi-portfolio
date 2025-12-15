export interface SocialLink {
  label: string;
  href: string;
  logo: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  profileSummary: string[];
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  name: string;
  projectLogo: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  projects: Project[];
  logo: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    logo: string;
    color?: string;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  logo: string;
  certLink?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
  logo?: string;
}

export interface PortfolioData {
  contact: ContactInfo;
  experience: Experience[];
  skills: Skill[];
  certifications: Certification[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  contact: {
    name: "Deeparishi A",
    title: "Junior Software Engineer",
    email: "deeparishia@gmail.com",
    phone: "+91 9585155720",
    location: "Chennai, India",
    github: "https://github.com/deeparishi",
    linkedin: "https://www.linkedin.com/in/deeparishi25/",
    leetcode: "https://leetcode.com/u/Deeparishi2552/",
    profileSummary: [
      "<strong>Java Backend Engineer</strong> with <strong>1.8 years</strong> of experience building scalable <strong>microservices</strong> and <strong>RESTful APIs</strong> using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>Hibernate</strong>, with hands-on expertise in <strong>RabbitMQ</strong>, <strong>Redis</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>.",
      "Experienced in writing unit tests with <strong>JUnit</strong>, enforcing code quality using <strong>SonarQube</strong>, and deploying secure backend systems with <strong>OAuth2</strong>, <strong>JWT</strong>, and <strong>SSO</strong>. Proficient with <strong>CI/CD pipelines</strong> and cloud services on <strong>AWS</strong> (EC2, S3, RDS) and <strong>Azure Blob Storage</strong>.",
      "Passionate about building <strong>MCP Servers</strong>, exploring <strong>AI agents</strong>, and delivering <strong>future-ready solutions</strong>. Strong team player in <strong>Agile/Scrum</strong> environments, contributing across the SDLC with clean, maintainable, and high-performance code.",
    ],
    resumeUrl: "/assets/resume/Deeparishi_java_developer_resume.pdf",
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/deeparishi",
        logo: "/assets/Contact/Github.png",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/deeparishi25/",
        logo: "/assets/Contact/LinkedIn.png",
      },
      {
        label: "LeetCode",
        href: "https://leetcode.com/u/Deeparishi2552/",
        logo: "/assets/Contact/leetcode.png",
      },
    ],
  },
  experience: [
    {
      id: "1",
      title: "Junior Software Engineer",
      company: "HEPL - Cavinkare Groups",
      location: "Chennai",
      startDate: "May 2024",
      endDate: "Present",
      logo: "/assets/companies/hepl-cavinkare.png",
      projects: [
        {
          id: "1a",
          name: "Finserve - Financial Service Platform",
          startDate: "May 2024",
          endDate: "Dec 2024",
          projectLogo: "",
          description: [
            "Optimized a legacy API using in-memory aggregation and multi-threaded batch processing, reducing execution time from 45 min to under 5 sec while preserving complete data integrity."
            "Optimized a legacy API using in-memory aggregation and multi-threaded batch processing, reducing execution time from 45 min to under <5 sec while preserving complete data integrity",
            "Contributed to a FinTech platform connecting applicants and lenders, cutting manual effort by 80%",
            "Integrated 20+ lender partner APIs with fault-tolerant design with retries and fallback logic, improving API success rate by 15–18%",
            "Strengthened code quality using SonarQube, JUnit, and effective debugging techniques to identify and fix bugs, reducing production problems",
            "Implemented CIBIL API integration and secured sensitive data with AES-256 encryption, reducing compliance-related risks by 30%",
            "Built and debugged ReactJS UI components; optimized API communication with concurrent processing in Vite + React + TypeScript frontend.",
          ],
          technologies: [
            "Java",
            "Springboot",
            "MySQL",
            "Spring Cache",
            "Redis",
            "JMeter",
            "SonarQube",
            "ReactJS",
          ],
        },
        {
          id: "1b",
          name: "Trove",
          startDate: "Dec - 2024",
          endDate: "Present",
          projectLogo: "/assets/projects/hepl/trove.png",
          description: [
            "Collaborated with a cross-functional team to build RESTful APIs and microservices, optimizing JSON structures and SQL queries, improving performance by up to 65%.",
            "Implemented authentication and authorization flows using Spring Security, SSO, OTP, OAuth2, JWT, improving login reliability by 30%.",
            "Contributed to FFmpeg–Kafka service to generate multi-resolution media outputs, reducing buffering latency by 50% and integrating storage with AWS S3",
            "Added real-time messaging using WebSockets and Redis, cutting unnecessary DB queries by 25% and improving concurrent user responsiveness.",
            "Optimized API communication between services and mobile/web apps with concurrent processing; integrated APIs in Vite + React + TypeScript frontend.",
          ],
          technologies: [
            "Java 17",
            "Spring Boot",
            "Microservices",
            "Apache Kafka",
            "RabbitMQ",
            "MongoDB",
            "Redis",
            "Firebase",
            "Grafana",
            "WebSockets",
            "Vite React",
          ],
        },
      ],
    },
    // {
    //   id: "2",
    //   title: "Junior Software Engineer",
    //   company: "FAW Technologies",
    //   location: "Chennai, India",
    //   startDate: "Sept 2023",
    //   endDate: "Apr 2024",
    //   logo: "/assets/companies/faw-technologies.png",
    //   projects: [
    //     {
    //       id: "2a",
    //       name: "Gloplax - GCC Model",
    //       startDate: "Dec 2023",
    //       endDate: "Apr 2024",
    //       projectLogo: "/assets/projects/faw/Gloplax.png",
    //       description: [
    //         "Designed RESTful APIs to enable dynamic data delivery between microservices based on user input.",
    //         "Integrated Spring Boot caching to optimize data calculations, boosting performance by 85%.",
    //         "Built custom annotations, DTOs, and boilerplate dependencies, reducing repetitive code by 50% across microservices.",
    //         "Handled deployment of 5 microservices on Linux and 3 frontend apps on AWS across multiple environments.",
    //       ],
    //       technologies: [
    //         "Java 17",
    //         "Springboot",
    //         "SPring Cache",
    //         "MySQL",
    //         "RabbitMQ",
    //         "WinSCP",
    //         "PuTTy",
    //         "AWS RDS",
    //         "AWS EC2",
    //       ],
    //     },
    //     {
    //       id: "2b",
    //       name: "Ford",
    //       startDate: "Sept 2023",
    //       endDate: "Dec 2023",
    //       projectLogo: "/assets/projects/faw/ford.png",
    //       description: [
    //         "Integrated CRON Jobs API with BigQuery for Qlik dashboard visualization, improving calculation accuracy by 25%.",
    //         "Resolved Angular UI bugs through thorough debugging and validation.",
    //         "Tested and validated data from 7 warehouses across dashboards to ensure data accuracy.",
    //       ],
    //       technologies: [
    //         "Java",
    //         "Springboot",
    //         "Big Query",
    //         "GCP",
    //         "Qlik",
    //         "Python",
    //       ],
    //     },
    //   ],
    // },
  ],
  skills: [
    {
      category: "Backend",
      items: [
        {
          name: "Java 17",
          logo: "assets/skills/Java.png",
        },
        {
          name: "Spring Boot",
          logo: "/assets/skills/springboot.png",
        },
        {
          name: "Microservices",
          logo: "/assets/skills/spring-microservice.png",
        },
        {
          name: "Hibernate",
          logo: "/assets/skills/Hibernate.png",
        },
        {
          name: "WebSockets",
          logo: "assets/skills/Socket.io.png",
        },
      ],
    },
    {
      category: "Messaging & Event Streaming",
      items: [
        {
          name: "Apache Kafka",
          logo: "/assets/skills/Apache Kafka.png",
        },
        {
          name: "RabbitMQ",
          logo: "assets/skills/RabbitMQ.png",
        },
      ],
    },
    {
      category: "Database & Caching",
      items: [
        {
          name: "MySQL",
          logo: "assets/skills/MySQL.png",
        },
        {
          name: "MongoDB",
          logo: "assets/skills/MongoDB.png",
        },
        {
          name: "Redis",
          logo: "assets/skills/Redis.png",
        },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        {
          name: "Docker",
          logo: "/assets/skills/Docker.png",
        },
        {
          name: "Maven",
          logo: "/assets/skills/Apache Maven.png",
        },
        {
          name: "AWS",
          logo: "assets/skills/AWS.png",
        },
      ],
    },
    {
      category: "Tools & Monitoring",
      items: [
        {
          name: "Git",
          logo: "assets/skills/Git.png",
        },
        {
          name: "GitHub",
          logo: "assets/skills/GitHub.png",
        },
        {
          name: "GitLab",
          logo: "assets/skills/GitLab.png",
        },
        {
          name: "SonarQube",
          logo: "assets/skills/SonarQube.png",
        },
        {
          name: "JMeter",
          logo: "https://jmeter.apache.org/images/apple-touch-icon.png",
        },
        {
          name: "Grafana",
          logo: "assets/skills/Grafana.png",
        },
        {
          name: "PuTTY",
          logo: "assets/skills/PuTTY.png",
        },
        {
          name: "WinSCP",
          logo: "/assets/skills/winscp.png",
        },
      ],
    },
  ],
  certifications: [
    {
      id: "1",
      name: "Data Structures and Algorithms",
      issuer: "Udemy",
      year: "2025",
      logo: "https://img.utdstc.com/icon/f61/db0/f61db034c2532bcef67713d4460207372054c4d2b92f271839544a47054b585e:200",
      certLink:
        "https://www.udemy.com/certificate/UC-9f923f50-15f4-4792-ac82-8b94af3adcfa/",
    },
    {
      id: "2",
      name: "Software Engineer",
      issuer: "Hackerrank",
      year: "2024",
      logo: "assets/Certificate/Hackerrank.png",
      certLink: "https://www.hackerrank.com/certificates/03fa8c69773d?hr_r",
    },
    {
      id: "3",
      name: "Java with SQL",
      issuer: "Besant technologies",
      year: "2023",
      logo: "assets/Certificate/Besant technologies.png",
      certLink:
        "https://drive.google.com/file/d/1Nwjnj-GX17ypwCPkMzFG3p2MlDfByv5X/view",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Mechanical Engineering",
      institution:
        "Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College",
      location: "Chennai, India",
      year: "2019-2023",
      gpa: "8.17/10",
      logo: "assets/Education/Veltech.png",
    },
  ],
};

export interface SecretData {
  PUBLIC_KEY: string;
  OWNER_EMAIL: string;
  SERVICE_ID: string;
  TEMPLATE_TO_OWNER: string;
  TEMPLATE_TO_RECRUITER: string;
}

export const Integration: SecretData = {
  PUBLIC_KEY: "tUjNxVa35ascMJOOU",
  OWNER_EMAIL: "deeparishia@gmail.com",
  SERVICE_ID: "service_j4iwtuk",
  TEMPLATE_TO_OWNER: "template_u8qquee",
  TEMPLATE_TO_RECRUITER: "template_5rz3tfh",
};


