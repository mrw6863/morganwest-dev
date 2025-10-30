export interface CareerExperience {
    company: string;
    title: string;
    duration: string;
    startDate: string; // For sorting/filtering
    endDate: string | "Present";
    location: string;
    responsibilities: string[];
    skills: string[];
    description: string; // Short description for cards
    image?: string; // Company logo
  }
  
  export interface Education {
    institution: string;
    degree: string;
    date: string;
  }
  
  export interface Certification {
    name: string;
    organization: string;
    date: string;
  }
  
  export const experiences: CareerExperience[] = [
    {
      company: "Butler/Till",
      title: "Software Engineer II",
      duration: "February 2025 - Present",
      startDate: "2025-02-01",
      endDate: "Present",
      location: "Rochester, NY",
      description: "Building innovative solutions in a dynamic agency environment.",
      image: "https://butlertill.com/wp-content/uploads/2023/05/BT_Logo_Blog-Thumbnail.png",
      responsibilities: [
        "Just getting started on this exciting new chapter in my career!",
        "More updates to come as I dive into projects and make an impact.",
        "Stay tuned for details on the innovative work happening at Butler/Till."
      ],
      skills: [
        "Software Engineering"
      ]
    },
    {
      company: "WeTheHobby",
      title: "Software Engineer",
      duration: "May 2023 - February 2025",
      startDate: "2023-05-01",
      endDate: "2025-02-01",
      location: "Rochester, NY",
      description: "Led multiple products as Project Manager and full-stack developer in a dynamic Agile environment.",
      image: "https://static.wixstatic.com/media/5b8121_b2f23e250c1e4277a0b2e7999a935042~mv2.jpg/v1/fill/w_1200,h_628,al_c/5b8121_b2f23e250c1e4277a0b2e7999a935042~mv2.jpg",
      responsibilities: [
        "Led multiple products (Dashboard, Stream App) as Project Manager while contributing as a developer within a 4-member Agile team",
        "Spearheaded development of innovative repack system with builder, viewer, validation, and prize functionality",
        "Drove technical excellence as a full-stack developer by leading TypeScript migration initiatives",
        "Transformed Agile workflows through planning poker and retrospectives, managing 699+ work items with 72% completion rate",
        "Established robust documentation systems including ADO wiki and Notion dashboard",
        "Led development of streaming capabilities including face camera integration and ticker systems"
      ],
      skills: [
        "TypeScript", "JavaScript", "React", ".NET", "C#",
        "SQL", "Postgres", "Azure DevOps", "Git", "CSS",
        "vMix", "Bitfocus Companion", "Agile Project Management"
      ]
    },
    {
      company: "Blackbaud",
      title: "Software Engineer",
      duration: "May 2021 - September 2022",
      startDate: "2021-05-01",
      endDate: "2022-09-01",
      location: "Remote (Rochester, NY)",
      description: "Developed grant management portals and CRM systems for nonprofits using modern web technologies.",
      image: "https://enterpriseviewpoint.com/wp-content/uploads/2024/04/Enterprise-pic-4.jpg",
      responsibilities: [
        "Developed grant application and management portals using TypeScript",
        "Engineered a sophisticated CRM system for nonprofit grant applications",
        "Drove implementation of automated testing infrastructure using Playwright",
        "Collaborated within a high-performing Agile team of five",
        "Mentored new interns for successful team integration"
      ],
      skills: [
        "TypeScript", "HTML", "SCSS", "Azure DevOps",
        "Confluence", "Git", "Postgres", "SQL", "Playwright"
      ]
    }
  ];
  
  export const education: Education[] = [
    {
      institution: "Rochester Institute of Technology",
      degree: "Software Engineering BS",
      date: "May 2023"
    }
  ];
  
  export const certifications: Certification[] = [
    {
      name: "CAPM Certification Course",
      organization: "Project Management Institute",
      date: "Present"
    },
    {
      name: "SAFe Certification",
      organization: "Agile certified",
      date: "February 2022"
    }
  ];