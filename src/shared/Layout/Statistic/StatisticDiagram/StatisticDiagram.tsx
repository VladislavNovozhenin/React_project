import React, { useEffect } from 'react';
import styles from './statisticdiagram.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { IStatState } from '../../../store/stat/reducer';
import moment from 'moment';


interface IStatisticDiagramProps {
  weekTimeNow: string
  selectedDate: string
  handleSelectedDate: (date: string) => void
  subtractDays: number
}

type weekDay = {
  date: string,
  name: string,
  active: boolean,
  total_sec: number
}

let weekDays: weekDay[] = []

export function StatisticDiagram({ weekTimeNow, selectedDate, handleSelectedDate, subtractDays }: IStatisticDiagramProps) {

  const statItems = useSelector<RootState, IStatState[]>(state => state.stat)

  useEffect(() => {
    weekDays = []

    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      const weekDayDate = moment().subtract(subtractDays, 'days').weekday(dayNumber).format('YYYY-MM-DD');
      const weekDayName = moment().subtract(subtractDays, 'days').weekday(dayNumber).format('ddd');
      let totalSec = 0;

      //Ищем день в статистике по дате
      const foundStatItem = statItems.find(item => item.date === weekDayDate);

      if (foundStatItem) {
        totalSec = foundStatItem.total_sec;
      }

      weekDays.push({
        date: weekDayDate,
        name: weekDayName,
        active: selectedDate === weekDayDate,
        total_sec: totalSec,
      })
    }

  }, [selectedDate, weekTimeNow])

  function calcHeight(sec: number) {

    const maxHeight = 420;
    const height = sec * (maxHeight / (25 * 5 * 60));

    return height > 0
      ? height > maxHeight
        ? maxHeight
        : height + 5
      : 5;
  }

  return (
    <div className={styles.statisticDiagram}>
      <div className={styles.containerTop}>
        <div className={styles.line}>
          <span className={styles.lineValue}>1ч 40мин</span>
        </div>
        <div className={styles.line}>
          <span className={styles.lineValue}>1ч 15мин</span>
        </div>
        <div className={styles.line}>
          <span className={styles.lineValue}>50мин</span>
        </div>
        <div className={styles.line}>
          <span className={styles.lineValue}>25мин</span>
        </div>
      </div>
      <div className={styles.containerBottom}>
        {weekDays.map(item => {
          return (
            <div onClick={() => { handleSelectedDate(item.date) }} key={item.date} className={styles.week}>
              <div className={item.total_sec > 0 ?  item.active ? styles.valueActive : styles.value : styles.valueZero} style={{height: calcHeight(item.total_sec) + 'px'}}></div>
              <span className={item.active ? styles.nameActive : styles.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}
