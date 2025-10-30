// TerminalHeader.tsx
import React from 'react';
import styles from './TerminalHeader.module.css';

interface TerminalHeaderProps {
  onNavigate: (page: string) => void;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ onNavigate }) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.windowButtons}>
          <button className={`${styles.windowButton} ${styles.closeButton}`} aria-label="Close" />
          <button className={`${styles.windowButton} ${styles.minimizeButton}`} aria-label="Minimize" />
          <button className={`${styles.windowButton} ${styles.maximizeButton}`} aria-label="Maximize" />
        </div>
        <div className={styles.title}>user@portfolio:~/experience$</div>
      </div>
      <nav className={styles.navButtons}>
        <button className={styles.navButton} onClick={() => onNavigate('home')}>
          Home
        </button>
        <button className={styles.navButton} onClick={() => onNavigate('projects')}>
          Projects
        </button>
        {/* <button className={styles.navButton} onClick={() => onNavigate('contact')}>
          Contact
        </button> */}
      </nav>
    </div>
  );
};

export default TerminalHeader;