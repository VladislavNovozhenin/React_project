import React from 'react';
import styles from './statisticpomodoro.module.css';
import { StatPomodoro } from '../../../icons/statPomodoro';
import { HeaderSvg } from '../../../icons/headerSvg';
import { Format } from '../../../utils/format';

interface IStatisticPomodoroProps {
  statCount: number
}

export function StatisticPomodoro({ statCount }: IStatisticPomodoroProps) {

  const count = `${Format({ number: statCount, textFormat: ['помидоров', 'помидор', 'помидора'] })}`

  return (
    <div className={styles.statisticPomodoro}>
      <div className={statCount ? styles.containerTop : styles.containerTopZero}>
        {statCount
          ? <HeaderSvg />
          : <StatPomodoro />
        }
        <span className={statCount ? styles.descr : styles.none}>x {statCount}</span>
      </div>
      <div className={statCount ? styles.containerBottom : styles.none}>
        {count}
      </div>
    </div>
  );
}
