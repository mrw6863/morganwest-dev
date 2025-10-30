import React from 'react';
import styles from './ExperienceContent.module.css';
import { experiences, education, certifications } from '../../../info/experienceData';

const ExperienceContent: React.FC = () => {
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