import React, { useEffect, useState } from 'react';
import styles from './tasktime.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';
import { ITaskState } from '../../../../store/task.ts/reducer';

export function TaskTime() {
  const taskList = useSelector<RootState, ITaskState[]>(state => state.task)
  const pomodoroInterval = useSelector<RootState, number>(state => state.config.pomodoroTime)
  const [timeCounter, setTimeCounter] = useState({ pomodoro: 0, hour: 0, min: 0 });

  useEffect(() => {
    const newTimeCounter = {
      pomodoro: 0,
      hour: 0,
      min: 0
    }

    taskList.map((task: ITaskState) => (
      newTimeCounter.pomodoro += task.count
    ))

    const totalMin = newTimeCounter.pomodoro * pomodoroInterval;
    newTimeCounter.hour = Math.floor(totalMin / 60);
    newTimeCounter.min = totalMin % 60;

    setTimeCounter(newTimeCounter);

  }, [taskList])
  return (
    <div className={styles.taskTime}>
      {timeCounter.hour > 0 && <span>{timeCounter.hour} час </span>}
      {timeCounter.min > 0 && <span>{timeCounter.min} мин</span>}
    </div>
  );
}

