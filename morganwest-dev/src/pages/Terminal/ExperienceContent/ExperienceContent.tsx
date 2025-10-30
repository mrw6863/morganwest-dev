import React from 'react';
import styles from './ExperienceContent.module.css';

interface CareerExperience {
  company: string;
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

interface Education {
  institution: string;
  degree: string;
  date: string;
}

interface Certification {
  name: string;
  organization: string;
  date: string;
}

const ExperienceContent: React.FC = () => {
  const experiences: CareerExperience[] = [
    {
      company: "WeTheHobby",
      title: "Software Engineer",
      duration: "June 2023 - Present",
      location: "Rochester, NY",
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
      location: "Remote (Rochester, NY)",
      responsibilities: [
        "Developed grant application and management portals using TypeScript",
        "Engineered a sophisticated CRM system for nonprofit grant applications",
        "Drove implementation of automated testing infrastructure using Playwright",
        "Collaborated within a high-performing Agile team of five",
        "Mentored new interns for successful team integration"
      ],
      skills: [
        "TypeScript", "HTML", "SCSS", "ADO", 
        "Confluence", "Git", "Postgres", "SQL", "Playwright"
      ]
    }
  ];

  const education: Education[] = [
    {
      institution: "Rochester Institute of Technology",
      degree: "Software Engineering BS",
      date: "May 2023"
    }
  ];

  const certifications: Certification[] = [
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

  return (
    <div>
      <div className={styles.prompt}>
        $ cat experience.txt<span className={styles.cursor}>_</span>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>// PROFESSIONAL EXPERIENCE</div>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceBlock}>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.title}>{exp.title}</div>
            <div className={styles.meta}>{exp.duration} | {exp.location}</div>
            
            <div className={styles.subheading}>Responsibilities:</div>
            <ul className={styles.list}>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className={styles.listItem}>{resp}</li>
              ))}
            </ul>
            
            <div className={styles.subheading}>Skills:</div>
            <div className={styles.skillsGrid}>
              {exp.skills.map((skill, idx) => (
                <span key={idx} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>// EDUCATION & CERTIFICATIONS</div>
        {education.map((edu, index) => (
          <div key={index} className={styles.educationBlock}>
            <div className={styles.institution}>{edu.institution}</div>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.date}>{edu.date}</div>
          </div>
        ))}
        
        {certifications.map((cert, index) => (
          <div key={index} className={styles.educationBlock}>
            <div className={styles.institution}>{cert.name}</div>
            <div className={styles.degree}>{cert.organization}</div>
            <div className={styles.date}>{cert.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;