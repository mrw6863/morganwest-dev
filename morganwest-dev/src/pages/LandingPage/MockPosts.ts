export interface Post {
    id: number;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    date: string;
    fullContent: string;
  }
  
  export const mockPosts: Post[] = [
    {
      id: 1,
      title: "Software Engineer II at Butler/Till",
      description: "Building innovative solutions in a dynamic agency environment.",
      image: "https://butlertill.com/wp-content/uploads/2023/05/BT_Logo_Blog-Thumbnail.png",
      tags: ["software-engineering", "current"],
      date: "2025-02-01",
      fullContent: `Currently serving as Software Engineer II at Butler/Till since February 2025.
  
  Just getting started on this exciting new chapter in my career! More updates to come as I dive into projects and make an impact.
  
  Stay tuned for details on the innovative work happening at Butler/Till.`
    },
    {
      id: 2,
      title: "Software Engineer at WeTheHobby",
      description: "Led multiple products as Project Manager and full-stack developer in a dynamic Agile environment.",
      image: "https://static.wixstatic.com/media/5b8121_b2f23e250c1e4277a0b2e7999a935042~mv2.jpg/v1/fill/w_1200,h_628,al_c/5b8121_b2f23e250c1e4277a0b2e7999a935042~mv2.jpg",
      tags: ["software-engineering", "project-management", "full-stack"],
      date: "2023-05-01",
      fullContent: `Served as Software Engineer at WeTheHobby in Rochester, NY from May 2023 to February 2025.
  
  Key Achievements:
  • Led multiple products (Dashboard, Stream App) as Project Manager while contributing as a developer within a 4-member Agile team
  • Spearheaded development of innovative repack system with builder, viewer, validation, and prize functionality
  • Drove technical excellence as a full-stack developer by leading TypeScript migration initiatives
  • Transformed Agile workflows through planning poker and retrospectives, managing 699+ work items with 72% completion rate
  • Established robust documentation systems including ADO wiki and Notion dashboard
  • Led development of streaming capabilities including face camera integration and ticker systems
  
  Technologies: TypeScript, JavaScript, React, .NET, C#, SQL, Postgres, Azure DevOps, Git, CSS, vMix, Bitfocus Companion, Agile Project Management
  
  This role allowed me to grow significantly as both a technical leader and project manager, balancing hands-on development with strategic planning and team coordination.`
    },
    {
      id: 3,
      title: "Software Engineer at Blackbaud",
      description: "Developed grant management portals and CRM systems for nonprofits using modern web technologies.",
      image: "https://enterpriseviewpoint.com/wp-content/uploads/2024/04/Enterprise-pic-4.jpg",
      tags: ["software-engineering", "nonprofit-tech", "crm"],
      date: "2021-05-01",
      fullContent: `Served as Software Engineer at Blackbaud from May 2021 to September 2022, working remotely from Rochester, NY.
  
  Project Highlights:
  • Developed grant application and management portals using TypeScript, enabling nonprofits to streamline their grant processes
  • Engineered a sophisticated CRM system specifically designed for nonprofit grant applications, improving efficiency and user experience
  • Drove implementation of automated testing infrastructure using Playwright, significantly improving code quality and reducing bugs
  • Collaborated within a high-performing Agile team of five engineers
  • Mentored new interns, helping them successfully integrate into the team and contribute meaningfully
  
  Technical Environment:
  This role gave me deep experience in building mission-critical applications for the nonprofit sector. Working with Blackbaud's established codebase taught me the importance of maintainability, scalability, and user-centered design.
  
  Technologies: TypeScript, HTML, SCSS, Azure DevOps, Confluence, Git, Postgres, SQL, Playwright
  
  Working at Blackbaud was an incredible opportunity to use technology to make a positive impact on the nonprofit sector, building tools that help organizations secure funding and manage their grant programs effectively.`
    }
  ];