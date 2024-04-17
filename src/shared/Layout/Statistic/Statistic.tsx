import React, { useEffect, useState } from 'react';
import styles from './statistic.module.css';
import { MenuStatisticDropdown } from './MenuStatisticDropdown';
import { StatisticWeek } from './StatisticWeek';
import { StatisticDiagram } from './StatisticDiagram';
import { StatisticPomodoro } from './StatisticPomodoro';
import { StatisticFocus } from './StatisticFocus';
import { StatisticPause } from './StatisticPause';
import { StatisticStop } from './StatisticStop';
import moment from 'moment';
import 'moment/locale/ru'
import { IStatState } from '../../store/stat/reducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

moment.locale('ru')

const week: weekNow[] = [
  {
    name: 'Эта неделя',
    id: 0
  },
  {
    name: 'Прошедшая неделя',
    id: 1
  },
  {
    name: '2 недели назад',
    id: 2
  }
];

export type weekNow = {
  name: string
  id: number
}

const emptyStatDay: IStatState = {
  date: moment().format('YYYY-MM-DD'),
  count: 0,
  stop_count: 0,
  work_sec: 0,
  pause_sec: 0,
  total_sec: 0,
}



export function Statistic() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [statDay, setStatDay] = useState(emptyStatDay);
  const [selectedDayName, setSelectedDayName] = useState(moment().format('dddd'));
  const stat = useSelector<RootState, IStatState[]>(state => state.stat)
  const [weekTimeNow, setWeekTimeNow] = useState(week[0].name)
  const [subtractDays, setSubtractDays] = useState(0)

  useEffect(() => {
    setSelectedDayName(moment(selectedDate).format('dddd'));
    //Ищем день в статистике по дате
    const foundStatItem = stat.find(item => item.date === selectedDate);

    //Применяем найденый день или ставим пустой
    if (foundStatItem) {
      setStatDay(foundStatItem);
    } else {
      setStatDay({
        date: selectedDate,
        count: 0,
        stop_count: 0,
        work_sec: 0,
        pause_sec: 0,
        total_sec: 0,
      });
    }

  }, [selectedDate]);

  useEffect(() => {
    switch (weekTimeNow) {
      case 'Эта неделя':
        setSelectedDate(moment().format('YYYY-MM-DD'));
        setSubtractDays(0)
        break;
      case 'Прошедшая неделя':
        setSelectedDate(moment().subtract(7, 'days').format('YYYY-MM-DD'));
        setSubtractDays(7)
        break;
      case '2 недели назад':
        setSelectedDate(moment().subtract(14, 'days').format('YYYY-MM-DD'));
        setSubtractDays(14)
        break;
    }
  }, [weekTimeNow]);

  function changeSelectedDate(date: string) {
    setSelectedDate(date)
  }

  return (
    <div className={styles.contentStatistic}>
      <div className={styles.statisticTop}>
        <h2 className={styles.title}>
          Ваша активность
        </h2>
        <MenuStatisticDropdown
          weekTimeNow={weekTimeNow}
          setWeekTimeNow={setWeekTimeNow}
          week={week}
        />
      </div>
      <div className={styles.statisticBottom}>
        <StatisticWeek
          selectedDayName={selectedDayName}
          totalSec={statDay.total_sec}
        />
        <StatisticDiagram weekTimeNow={weekTimeNow} selectedDate={selectedDate} handleSelectedDate={changeSelectedDate} subtractDays={subtractDays} />
        <StatisticPomodoro
          statCount={statDay.count}
        />
        <StatisticFocus
          workSec={statDay.work_sec}
          totalSec={statDay.total_sec}
        />
        <StatisticPause
          pauseSec={statDay.pause_sec}
        />
        <StatisticStop
          stopCount={statDay.stop_count}
        />
      </div>
    </div>
  );
}
