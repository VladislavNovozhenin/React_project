import React from 'react';
import styles from './statisticstop.module.css';
import { StatStop } from '../../../icons/statStop';

interface IStatisticStopProps {
  stopCount: number
}

export function StatisticStop({stopCount}: IStatisticStopProps) {
  
  return (
    <div className={stopCount ? styles.statisticStopBlue : styles.statisticStop}>
      <div className={styles.content}>
        <span className={styles.name}>
        Остановки
        </span>
        <span className={styles.value}>
          {stopCount}
        </span>
      </div>
      <StatStop />
    </div>
  );
}

