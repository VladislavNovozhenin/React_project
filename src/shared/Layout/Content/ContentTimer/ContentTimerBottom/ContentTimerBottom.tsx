import React from 'react';
import styles from './contenttimerbottom.module.css'
import { TimerTime } from './TimerTime';
import { TimerTask } from './TimerTask';
import { TimerBtns } from './TimerBtns';
import { ITaskState } from '../../../../store/task.ts/reducer';
import { TimerAddSvg } from '../../../../icons/timerAdd';

interface IContentTimerBottomProps {
  taskList: ITaskState[],
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>,
  setTimer: React.Dispatch<React.SetStateAction<number>>,
  timer: number,
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
  isStarted: boolean,
  isPaused: boolean,
  handleCompleteTask: () => void,
  handleCompleteBreak: () => void,
  isTimeToBreak: boolean,
  setIsBreakStarted: React.Dispatch<React.SetStateAction<boolean>>,
  setIsBreakPaused: React.Dispatch<React.SetStateAction<boolean>>,
  isBreakStarted: boolean,
  isBreakPaused: boolean,
  setConfig: React.Dispatch<React.SetStateAction<boolean>>,
}

export function ContentTimerBottom(props: IContentTimerBottomProps) {
  const { setConfig,
    isBreakPaused,
    isBreakStarted,
    handleCompleteBreak,
    setIsBreakPaused,
    setIsBreakStarted,
    isTimeToBreak,
    taskList,
    setIsStarted,
    setIsPaused,
    handleCompleteTask,
    isPaused,
    isStarted,
    timer,
    setTimer
  } = props

  return (
    <div className={styles.timerBottom}>
      <button onClick={() => setTimer(timer + 60)} className={styles.btnAdd}>
        <TimerAddSvg />
      </button>
      <TimerTime
        isBreakStarted={isBreakStarted}
        isBreakPaused={isBreakPaused}
        isStarted={isStarted}
        isPaused={isPaused}
        setConfig={setConfig}
        timer={timer}
      />
      <TimerTask taskList={taskList} />
      <TimerBtns
        taskList={taskList}
        setIsPaused={setIsPaused}
        isStarted={isStarted}
        isPaused={isPaused}
        setIsStarted={setIsStarted}
        setTimer={setTimer}
        handleCompleteTask={handleCompleteTask}
        isTimeToBreak={isTimeToBreak}
        setIsBreakStarted={setIsBreakStarted}
        setIsBreakPaused={setIsBreakPaused}
        handleCompleteBreak={handleCompleteBreak}
        isBreakStarted={isBreakStarted}
        isBreakPaused={isBreakPaused}
      />
    </div>
  );
}
