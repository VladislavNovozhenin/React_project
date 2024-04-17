import React from 'react';
import styles from './contenttimertop.module.css';
import { ITaskState } from '../../../../store/task.ts/reducer';

interface IContentTimerTopProps {
  taskList: ITaskState[]
  currentPomodoro: number
  breakCounter: number
  isTimeToBreak: boolean
  isStarted: boolean
  isPaused: boolean
}

export function ContentTimerTop({ isPaused, isStarted, isTimeToBreak, currentPomodoro, breakCounter, taskList }: IContentTimerTopProps) {
  return (
    <div>
      {(taskList.length === 0)
        ? <div className={isTimeToBreak ? styles.timerTopBreak : (isStarted || isPaused) ? styles.timerTopTask : styles.timerTop}>
          <span className={styles.timerTitle}>Задач пока нет</span>
        </div>
        : <div className={isTimeToBreak ? styles.timerTopBreak : (isStarted || isPaused) ? styles.timerTopTask : styles.timerTop}>
          <span className={styles.timerTitle}>{taskList[0].title}</span>
          {isTimeToBreak
            ? <span className={styles.timerNumber}>Перерыв {breakCounter} </span>
            : <span className={styles.timerNumber}>Помидор {currentPomodoro} </span>
          }
        </div>
      }
    </div>
  );
}
