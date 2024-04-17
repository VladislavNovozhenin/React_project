import React from 'react';
import styles from './timerbtns.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/reducer';
import { ITaskState } from '../../../../../store/task.ts/reducer';
import { useDispatch } from 'react-redux';
import { statStopCount } from '../../../../../store/stat/actions';

interface ITimerBtnsProps {
  taskList: ITaskState[],
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>,
  setTimer: React.Dispatch<React.SetStateAction<number>>,
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
  setIsBreakStarted: React.Dispatch<React.SetStateAction<boolean>>,
  setIsBreakPaused: React.Dispatch<React.SetStateAction<boolean>>,
  isStarted: boolean,
  isPaused: boolean,
  isTimeToBreak: boolean,
  handleCompleteTask: () => void,
  handleCompleteBreak: () => void,
  isBreakStarted: boolean,
  isBreakPaused: boolean,
}

interface ITimerBtnProps {
  name: string,
  onClick: () => void,
  disabled?: boolean
}
export function TimerBtns(props: ITimerBtnsProps) {

  const { taskList,
    isBreakPaused,
    isBreakStarted,
    handleCompleteBreak,
    setIsBreakPaused,
    setIsBreakStarted,
    isTimeToBreak,
    setIsStarted,
    setIsPaused,
    handleCompleteTask,
    isPaused,
    isStarted,
    setTimer
  } = props

  const pomodoroInterval = useSelector<RootState, number>(state => state.config.pomodoroTime)
  const dispatch = useDispatch()

  function handleStart() {
    if (isTimeToBreak) {
      setIsBreakStarted(true)
    } else {
      setIsStarted(true);
    }
  }

  function handleStop() {
    setIsStarted(false);
    setTimer(pomodoroInterval * 60);
    dispatch(statStopCount())
    
  }

  function handlePause() {
    if (isTimeToBreak) {
      setIsBreakPaused(true)
    } else {
      setIsPaused(true);
    }
  }

  function handleResume() {
    if (isTimeToBreak) {
      setIsBreakPaused(false);
    } else {
      setIsPaused(false);
    }
  }

  let firstButton: ITimerBtnProps = {
    name: 'Старт',
    onClick: handleStart,
    disabled: taskList.length ? false : true,
  }

  let secondButton: ITimerBtnProps = {
    name: isTimeToBreak ? 'Пропустить' : 'Стоп',
    onClick: isTimeToBreak ? handleCompleteBreak : handleStop,
    disabled: !isTimeToBreak,
  }

  if (isStarted || isBreakStarted) {
    firstButton = {
      name: 'Пауза',
      onClick: handlePause,
      disabled: false,
    }

    secondButton = {
      name: isTimeToBreak ? 'Пропустить' : 'Стоп',
      onClick: isTimeToBreak ? handleCompleteBreak : handleStop,
      disabled: false,
    }
  }
  if (isPaused || isBreakPaused) {
    firstButton = {
      name: 'Продолжить',
      onClick: handleResume,
      disabled: false,
    }

    secondButton = {
      name: isTimeToBreak ? 'Пропустить' : 'Сделано',
      onClick: isTimeToBreak ? handleCompleteBreak : handleCompleteTask,
      disabled: false,
    }
  }

  return (
    <div className={styles.timerBtns}>
      <button onClick={firstButton.onClick} className={styles.timerStart} disabled={firstButton.disabled}>
        {firstButton.name}
      </button>
      <button onClick={secondButton.onClick} className={styles.timerStop} disabled={secondButton.disabled}>
        {secondButton.name}
      </button>
    </div>
  );
}
