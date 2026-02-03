// Default export for current stack
export const projects = [
  {
    title: "Squareup Developer Portal",
    description:
      "Developer portal for Squareup, providing API documentation and tools for payment integration.",
    tech: ["React", "Next.js", "Node.js", "API"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/developer.squareup.com.png",
    live: "https://developer.squareup.com",
  },
  {
    title: "Spotify Engineering Blog",
    description:
      "Engineering blog platform for Spotify, featuring articles on backend, frontend, and data engineering.",
    tech: ["React", "Gatsby", "GraphQL"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/engineering.atspotify.com.png",
    live: "https://engineering.atspotify.com",
  },
  {
    title: "LINE Engineering",
    description:
      "Technical blog and showcase for LINE's engineering team, covering large-scale messaging infrastructure.",
    tech: ["Vue.js", "Nuxt.js", "Node.js"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/engineering.linecorp.com.png",
    live: "https://engineering.linecorp.com",
  },
  {
    title: "Schibsted Vend Platform",
    description:
      "E-commerce platform for Schibsted, supporting high-traffic classified ads and secure transactions.",
    tech: ["React", "Redux", "Node.js", "AWS"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/schibsted-vend.pl.png",
    live: "https://schibsted-vend.pl",
  },
  {
    title: "BigEng.io Blog",
    description:
      "Engineering blog for BigEng.io, focused on distributed systems, cloud, and DevOps best practices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/www.bigeng.io.png",
    live: "https://www.bigeng.io",
  },
  {
    title: "Eventbrite Engineering",
    description:
      "Showcase of Eventbrite's engineering projects, including event management and ticketing solutions.",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/www.eventbrite.com.png",
    live: "https://www.eventbrite.com",
  },
  {
    title: "Hostinger Tech Blog",
    description:
      "Technical blog for Hostinger, sharing insights on web hosting, scaling, and performance optimization.",
    tech: ["React", "Gatsby", "GraphQL", "Cloud"],
    github: "https://github.com/troyankostandd",
    image: "/src/assets/projects/www.hostinger.com.png",
    live: "https://www.hostinger.com",
  },
];
// Projects page intro text
export const projectsIntro =
  "Selected projects and products I've built or contributed to as a full stack developer.";
// Skills page intro text
export const skillsIntro =
  "Over 8 years of experience working with a diverse set of technologies across the full stack. Here's an overview of my technical expertise:";
// Professional focus areas for About page
export const focusAreas = [
  "Building scalable web applications with modern JavaScript/TypeScript stacks",
  "Cloud infrastructure and DevOps practices (AWS, Docker, Kubernetes)",
  "Performance optimization and system reliability",
  "API design and microservices architecture",
  "Database optimization and data management",
  "Team collaboration in distributed, remote-first environments",
];
// Profile Data - Based on my-info.txt
export const profileData = {
  name: "Konstantin Troianivski",
  title: "Senior Full Stack Developer",
  email: "troyankostandd@proton.me",
  phone: "+40729562605",
  address: "Mun.Arad, Str Gheorghe Doja, Nr. 174, Ap. 10, Judetul Arad",
  linkedin: "https://www.linkedin.com/in/kostia-tr-9956aa203/",
  github: "https://github.com/troyankostandd",
  bio: "Senior Full Stack developer with over 8 years of experience building and maintaining real production systems.",
  summary: `Senior Full Stack developer with over 8 years of experience building and maintaining real production systems. Experienced in production systems with cloud deployments, CI/CD, and performance optimization. Comfortable working in distributed, remote-first teams.`,
  languages: ["Romanian", "English"],
};

export const skills = {
  programmingLanguages: {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "Java"],
  },
  databases: {
    title: "Databases & Data Search",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Kibana",
      "DynamoDB",
      "ORM/ODM (Prisma, TypeORM, Sequelize, Mongoose)",
      "RabbitMQ",
    ],
  },
  cloudDevops: {
    title: "Cloud & DevOps",
    items: [
      "AWS (IAM, EC2, S3, RDS, Lambda)",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
      "CI/CD Tools",
      "Terraform",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "CircleCI",
      "Vercel",
    ],
  },
  frameworks: {
    title: "Frameworks and Libraries",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Zustand",
      "Redux/RTK",
      "Tailwind CSS",
      "Material UI",
      "Laravel",
      "Node.js",
      "Nest",
      "FastAPI",
      "Spring Boot",
      "Django",
      "Django Restful Framework",
    ],
  },
  other: {
    title: "Other Technologies",
    items: [
      "SEO best practices",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
      "Event-driven architecture",
      "Microservices",
      "Domain-Driven Design (DDD)",
      "Security best practices (OWASP)",
    ],
  },
};

export const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Netguru",
    project: "",
    duration: "11/2021 – 12/2025",
    location: "Warsaw, Poland",
    type: "Remote",
    responsibilities: [
      "Built a customer-facing analytics SaaS used by about 18k monthly users, developing the frontend with React and Next.js and adding server-side rendering to fix SEO and slow initial page loads.",
      "Migrated a legacy PHP reporting backend to NestJS with TypeScript and PostgreSQL, fixing long-running queries and adding indexes after peak-hour requests exceeded acceptable response times.",
      "Created internal admin tools using Vue.js so operations teams could manage data without relying on manual spreadsheet updates.",
      "Designed and maintained REST and GraphQL APIs for web and mobile clients, handling breaking changes, partial rollouts, and backward compatibility for older versions.",
      "Added Redis caching and background processing with RabbitMQ to handle traffic spikes during billing periods and reduce synchronous request failures.",
      "Deployed services on AWS (EC2, RDS, S3) and later containerized them with Docker and Kubernetes, resolving autoscaling and health-check issues in production.",
      "Set up CI/CD pipelines using GitHub Actions and Jenkins, replacing manual deployments and reducing rollback time to under ten minutes.",
      "Built a nightly data sync service with FastAPI (Python), storing results in PostgreSQL and Elasticsearch so teams could run reports without impacting production traffic.",
      "Optimized PostgreSQL and MySQL performance using connection pooling, read replicas, and query tuning after load tests showed high p95 latency.",
      "Applied DDD and Clean Architecture when splitting a growing monolith into smaller services, which made the system easier to maintain and onboard new developers.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Dashbouquet Development",
    project: "",
    duration: "10/2016 – 11/2021",
    location: "Warsaw, Poland",
    type: "Remote",
    responsibilities: [
      "Worked mainly on frontend features using React and TypeScript, with a lot of focus on pages that mattered for SEO and first-load performance.",
      "Took responsibility for a user management dashboard built with React and Next.js, tightening rendering behavior and reducing slow page loads.",
      "Built and maintained backend APIs in Node.js and NestJS, covering authentication, user profiles, and core product data used daily by about 15k active users.",
      "Spent time improving database performance, mostly in PostgreSQL, after slow queries started showing up under real production traffic.",
      "Integrated third-party services such as payment and shipping providers, dealing with messy edge cases around data formats and authentication.",
      "Added Redis caching for sessions and frequently accessed product data when traffic spikes began to affect response times.",
      "Set up and maintained CI/CD pipelines with GitHub Actions, replacing manual deployments and making releases easier to repeat and roll back.",
      "Deployed and operated applications on AWS (EC2, S3, RDS), supporting scaling needs during launches and high-traffic periods.",
      "Worked closely with designers to translate designs into responsive interfaces using Tailwind CSS and Material UI, paying attention to behavior across screen sizes.",
    ],
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "VOIS Romania",
    duration: "07/2014 – 09/2017",
    location: "București, Romania",
    type: "On-Site",
    responsibilities: [
      "Worked on small but visible web features using JavaScript, TypeScript, and React, usually picking up tasks that unblocked larger stories.",
      "Implemented basic REST endpoints in Java with Spring Boot and Node.js with Express, following patterns set by senior engineers and learning how production APIs were structured.",
      "Fixed bugs and handled minor feature tweaks coming from QA and product tickets, often dealing with edge cases missed in initial development.",
      "Added unit tests where coverage was missing and kept API documentation up to date to make handoffs smoother for QA.",
      "Ran SQL queries for simple reports, data checks, and small fixes, getting comfortable working directly with production-like data.",
    ],
  },
];

export const education = [
  {
    id: 1,
    university: "Politehnica University of Bucharest",
    location: "Bucharest, Romania",
    degree: "Computer Science and Information Technology",
    duration: "10/2010 - 06/2014",
  },
];
