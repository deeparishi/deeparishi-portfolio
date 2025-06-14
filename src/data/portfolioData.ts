export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  profileSummary: string;
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
    logo: string; // URL to logo or icon component name
    color?: string; // Optional brand color
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
  resumeUrl: string;
}

export const portfolioData: PortfolioData = {
  contact: {
    name: "Deeparishi A",
    title: "Junior Software Engineer",
    email: "deeparishia@gmail.com",
    phone: "+91 9585155720",
    location: "Chennai, India",
    github: "https://github.com/deeparishi",
    linkedin: "https://linkedin.com/in/deeparishi",
    leetcode: "https://leetcode.com/u/Deeparishi2552/",
    profileSummary: "Software Engineer with 2+ years of experience building scalable web applications and microservices using Java, Spring Boot, and cloud platforms. A collaborative team player who takes ownership from concept to deployment, delivering high-quality, maintainable code. Passionate about creating MCP Servers, AI-agents, innovative, and future-ready solutions, with strong skills in SQL, NoSQL, and backend architecture."
  },
  experience: [
    {
      id: "1",
      title: "Junior Software Engineer",
      company: "HEPL - Cavinkare Groups",
      location: "Cuddalore, India",
      startDate: "May 2024",
      endDate: "Present",
      logo: "/src/assets/companies/hepl-cavinkare.png",
      projects: [
        {
          id: "1a",
          name: "Trove",
          startDate: "Dec - 2024",
          endDate: "Present",
          projectLogo: "/src/assets/projects/hepl/trove.png",
          description: [
            "Built secure login (SSO, OTP, AES) for DM & group chat; boosted performance by 60% using Redis.",
            "Reduced media size by 50% via FFmpeg microservice with RabbitMQ; ensured cross-platform support.",
            "Improved system efficiency by 65% using WebSockets and event-driven architecture for real-time chat & notifications.",
            "Optimized API communication between services and mobile/web apps with concurrent processing; integrated APIs in Vite + React + TypeScript frontend."
          ],
          technologies: ["Java 17", "Spring Boot", "Microservice", "RabbitMQ", "Websockets",
            "MongoDB", "Redis", "Firebase", "Vite React"]
        },
        {
          id: "1b",
          name: "Finserve - Financial Service Platform",
          startDate: "May 2024",
          endDate: "Dec 2024",
          projectLogo: "",
          description: [
            "Boosted data retrieval by 75% using Spring Cache and Redis; ensured app stability with JMeter and SonarQube.",
            "Integrated real-time financial APIs and third-party loan services, improving loan processing by 30% and enabling application tracking.",
            "Enabled real-time tracking of sales executives’ activities, reducing manual workflows by 90% and improving performance monitoring.",
            "Built and debugged ReactJS UI components; optimized API communication with concurrent processing in Vite + React + TypeScript frontend."
          ],
          technologies: ["Java", "Springboot", "MySQL", "Spring Cache", "Redis", "JMeter", "SonarQube", "ReactJS"]
        }
      ]
    },
    {
      id: "2",
      title: "Junior Software Engineer",
      company: "FAW Technologies",
      location: "Chennai, India",
      startDate: "Sept 2023",
      endDate: "Apr 2024",
      logo: "/src/assets/companies/faw-technologies.png",
      projects: [
        {
          id: "2a",
          name: "Gloplax - GCC Model",
          startDate: "Dec 2023",
          endDate: "Apr 2024",
          projectLogo: "/src/assets/projects/faw/Gloplax.png",
          description: [
            "Designed RESTful APIs to enable dynamic data delivery between microservices based on user input.",
            "Integrated Spring Boot caching to optimize data calculations, boosting performance by 85%.",
            "Built custom annotations, DTOs, and boilerplate dependencies, reducing repetitive code by 50% across microservices.",
            "Handled deployment of 5 microservices on Linux and 3 frontend apps on AWS across multiple environments."
          ],
          technologies: ["Java 17", "Springboot", "SPring Cache", "MySQL", "RabbitMQ", "WinSCP", "PuTTy", "AWS RDS", "AWS EC2"]
        },
        {
          id: "2b",
          name: "Ford",
          startDate: "Sept 2023",
          endDate: "Dec 2023",
          projectLogo: "/src/assets/projects/faw/ford.png",
          description: [
            "Integrated CRON Jobs API with BigQuery for Qlik dashboard visualization, improving calculation accuracy by 25%.",
            "Resolved Angular UI bugs through thorough debugging and validation.",
            "Tested and validated data from 7 warehouses across dashboards to ensure data accuracy."
          ]
          ,
          technologies: ["Java", "Springboot", "Big Query", "GCP", "Qlik", "Python"]
        }
      ]
    }
  ],
  skills: [
    // {
    //   category: "Frontend",
    //   items: [
    //     { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    //     { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    //     { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    //    ]
    // },
    {
      category: "Backend",
      items: [
        { name: "Java 17", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Microservices", logo: "https://www.svgrepo.com/show/373924/microservices.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "RabbitMQ", logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
        { name: "Websockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },

      ]
    },
    // {
    //   category: "Cloud",
    //   items: [
    //     { name: "AWS S3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
    //     { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    //   ]
    // },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "JMeter", logo: "https://jmeter.apache.org/images/jmeter_square.svg" },
        { name: "SonarQube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
        { name: "WinSCP", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/WinSCP_Logo.png" },
        { name: "PuTTY", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/PuTTY_icon_128px.png" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
      ]
    }
  ],
  certifications: [
    {
      id: "1",
      name: "Data Structures and Algorithms",
      issuer: "Udemy",
      year: "2025",
      logo: "https://img.utdstc.com/icon/f61/db0/f61db034c2532bcef67713d4460207372054c4d2b92f271839544a47054b585e:200",
      certLink: "https://www.udemy.com/certificate/UC-9f923f50-15f4-4792-ac82-8b94af3adcfa/"
    },
    {
      id: "2",
      name: "Java for Software Developers",
      issuer: "Internshala",
      year: "2022",
      logo:"https://cdn-1.webcatalog.io/catalog/internshala/internshala-icon-filled-256.webp?v=1714779141663",
      certLink: "https://drive.google.com/file/d/1bbZfAWKyJbx0ZJPJS7nfpcRbKOMMTUnD/view?pli=1"
    }
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Mechanical Engineering",
      institution: "Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College",
      location: "Chennai, India",
      year: "2019-2023",
      gpa: "8.17/10",
      logo: "https://www.veltech.edu.in/wp-content/uploads/2022/05/logo-white.png"
    }
  ],
  resumeUrl: "https://drive.google.com/file/d/1V7dwByYVzZ4pm7hg6gh-G0AwKYJD72mg/view?usp=drivesdk",
};

export interface SecretData {
  PUBLIC_KEY: string,
  OWNER_EMAIL: string;
  SERVICE_ID: string,
  TEMPLATE_TO_OWNER: string,
  TEMPLATE_TO_RECRUITER: string
}

export const Integration: SecretData = {
  PUBLIC_KEY: "tUjNxVa35ascMJOOU",
  OWNER_EMAIL: "deeparishia@gmail.com",
  SERVICE_ID: "service_j4iwtuk",
  TEMPLATE_TO_OWNER: "template_u8qquee",
  TEMPLATE_TO_RECRUITER: "template_5rz3tfh"
}