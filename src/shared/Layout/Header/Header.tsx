import React from 'react';
import styles from './header.module.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderStatistics } from './HeaderStatistics';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
      <HeaderLogo />
      <HeaderStatistics/>
      </div>
      
    </header>
  );
}
