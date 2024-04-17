import React from 'react';
import styles from './timertask.module.css';
import { ITaskState } from '../../../../../store/task.ts/reducer';

interface IContentTimerTask {
  taskList: ITaskState[]
}

export function TimerTask({ taskList }: IContentTimerTask) {

  return (
    <span className={styles.timerTask}>
      {(taskList.length === 0)
        ? 'Задач пока нет'
        : <span className={styles.timerTaskTask}>Задача-1<span className={styles.timerPurpose}>{taskList[0].title}</span></span>
      }
    </span>
  );
}
