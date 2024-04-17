import React from 'react';
import styles from './statisticfocus.module.css';
import { StatFocus } from '../../../icons/statFocus';

interface IStatisticFocusProps {
  workSec: number,
  totalSec: number,
}

export function StatisticFocus({ workSec, totalSec }: IStatisticFocusProps) {
  let focus = Math.floor(workSec / totalSec * 100)
  if (focus < 0 || isNaN(focus)) {
    focus = 0;
  }
  return (
    <div className={focus ? styles.statisticFocusOrange : styles.statisticFocus}>
      <div className={styles.content}>
        <span className={styles.name}>
          Фокус
        </span>
        <span className={styles.value}>
          {focus}%
        </span>
      </div>
      <StatFocus />
    </div>
  );
}
