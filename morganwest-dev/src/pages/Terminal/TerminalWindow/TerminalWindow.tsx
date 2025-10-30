import React from 'react';
import styles from './TerminalWindow.module.css';
import TerminalHeader from '../TerminalHeader/TerminalHeader';

interface TerminalWindowProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, onNavigate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <TerminalHeader onNavigate={onNavigate} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;