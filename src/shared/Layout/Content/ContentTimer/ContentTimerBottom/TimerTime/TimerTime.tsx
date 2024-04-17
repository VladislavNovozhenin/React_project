import React from 'react';
import styles from './timertime.module.css';
import { Setting } from '../../../../../icons/setting';

interface ITimerTimeProps {
  isBreakStarted: boolean
  isBreakPaused: boolean
  isStarted: boolean
  isPaused: boolean
  timer: number
  setConfig: React.Dispatch<React.SetStateAction<boolean>>,
}

export function TimerTime({setConfig,  isBreakPaused, isBreakStarted, timer, isStarted, isPaused }: ITimerTimeProps) {

  function getFormattedTimer() {
    const minutes = parseInt(String(timer / 60));
    const seconds = timer % 60;

    const strSeconds = seconds < 10 ? '0' + seconds : '' + seconds
    const strMinutes = minutes < 10 ? '0' + minutes : '' + minutes

    return strMinutes + ':' + strSeconds
  }

  return (
    <div className={(isStarted && !isPaused) ? styles.timerTimeRed : (isBreakStarted && !isBreakPaused) ? styles.timerTimeGreen: styles.timerTime}>
      {getFormattedTimer()}
      <button  onClick={() => setConfig(true)} className={styles.timerSet}>
        <Setting/>
      </button>
    </div>
  );
}
