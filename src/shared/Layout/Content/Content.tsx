import React from 'react';
import styles from './content.module.css';

import { ContentTasks } from './ContentTasks';
import { ContentTimer } from './ContentTimer';

export function Content() {
 
  return (
    <div className={styles.contentHome}>
      <ContentTasks />
      <ContentTimer />
    </div>
  );
}
