import React from 'react';
import styles from './statisticpause.module.css';
import { StatPause } from '../../../icons/statPause';


interface IStatisticPauseProps {
  pauseSec: number
}

export function StatisticPause({ pauseSec }: IStatisticPauseProps) {

  const hour = Math.floor(pauseSec / 3600);
  const min = Math.floor(pauseSec / 60);
  const sec = pauseSec % 60;

  const hourMin = `${hour}ч ${min}м`;
  const minSec = `${min}м ${sec}c`
  const timePause = hour < 1 ? minSec : hourMin
  return (
    <div className={pauseSec ? styles.statisticPausePurple : styles.statisticPause}>
      <div className={styles.content}>
        <span className={styles.name}>
          Время на паузе
        </span>
        <span className={styles.value}>
          {timePause}
        </span>
      </div>
      <StatPause />
    </div>
  );
}
