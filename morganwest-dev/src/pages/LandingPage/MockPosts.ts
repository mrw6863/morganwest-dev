import { experiences } from '../../info/experienceData';
import { NotionPost } from '../../services/notionService';

export interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  date: string;
  fullContent: string;
}

// Convert experiences to posts format
export const mockPosts: NotionPost[] = experiences.map((exp, index) => {
  // Generate full content from experience data
  const responsibilitiesList = exp.responsibilities
    .map(resp => `• ${resp}`)
    .join('\n');
  
  const skillsList = exp.skills.join(', ');
  
  const fullContent = `Served as ${exp.title} at ${exp.company} from ${exp.duration}.

${exp.company === "Butler/Till" ? 
  `Just getting started on this exciting new chapter in my career! More updates to come as I dive into projects and make an impact.

Stay tuned for details on the innovative work happening at ${exp.company}.` 
  :
  `Key Achievements:
${responsibilitiesList}

Technologies: ${skillsList}

This role allowed me to grow significantly as both a technical leader and project manager, balancing hands-on development with strategic planning and team coordination.`
}`;

  // Generate tags from skills (take first few)
  const tags = [
    `software-engineering-${index}`, // Make it unique
    ...(exp.endDate === 'Present' ? ['current'] : []),
    ...(exp.skills.slice(0, 2).map((skill: any) => skill.toLowerCase().replace(/\s+/g, '-')))
  ];

  return {
    id: String(index + 1), // Convert to string
    title: `${exp.title} at ${exp.company}`,
    description: exp.description,
    image: exp.image || '', // Ensure image is always a string
    tags: tags,
    date: exp.startDate,
    content: fullContent // Change from fullContent to content to match NotionPost interface
  };
});