import React from 'react';
import styles from './statisticweek.module.css';
import { Format } from '../../../utils/format';

interface IStatisticWeekProps {
  totalSec: number
  selectedDayName: string
}

export function StatisticWeek({ totalSec, selectedDayName }: IStatisticWeekProps) {

  const hour = Math.floor(totalSec / 3600);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;

  const hourMin = `${Format({ number: hour, textFormat: ['часов', 'часа', 'часов'] })} ${Format({ number: min, textFormat: ['минут', 'минуты', 'минут'] })}`
  const minSec = `${Format({ number: min, textFormat: ['минут', 'минуту', 'минут'] })} ${Format({ number: sec, textFormat: ['секунд', 'секунды', 'секунд'] })}`

  const timeString = hour < 1 ? minSec : hourMin

  return (
    <div className={styles.statisticWeek}>
      <h3 className={styles.title}>
        {selectedDayName.charAt(0).toUpperCase() + selectedDayName.slice(1)}
      </h3>
      {totalSec > 0
        ? <p className={styles.descr}>
          Вы работали над задачами в течение
          <span>{timeString}</span>
        </p>
        : <p className={styles.descr}>
          Нет данных
        </p>
      }
    </div>
  );
}
