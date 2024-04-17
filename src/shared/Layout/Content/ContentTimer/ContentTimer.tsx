import styles from "./contenttimer.module.css";
import { ContentTimerTop } from "./ContentTimerTop";
import { ContentTimerBottom } from "./ContentTimerBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";
import { useState, useEffect } from "react";
import { ConfigTimer } from "./ConfigTimer";
import {
  PomodoroIncreaseCount,
  resetCount,
  breakIncreaseCount,
} from "../../../store/count/actions";
import { decreaseTask, deleteTask } from "../../../store/task.ts/actions";
import { ITaskState } from "../../../store/task.ts/reducer";
import React from "react";
import { ModalTimerEnd } from "./ModalTimerEnd";
import audio from "../../../audio/alarm-clock-beep-1_zjgin-vd.mp3";
import {
  statWork,
  statTotal,
  statCountPause,
  statCount,
} from "../../../store/stat/actions";

export function ContentTimer() {
  const taskList = useSelector<RootState, ITaskState[]>((state) => state.task);
  const pomodoroInterval = useSelector<RootState, number>(
    (state) => state.config.pomodoroTime
  );
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState(pomodoroInterval * 60);
  const currentPomodoro = useSelector<RootState, number>(
    (state) => state.count.pomodoro
  );
  const dispatch = useDispatch();
  const breakCounter = useSelector<RootState, number>(
    (state) => state.count.break
  );
  const smallBreak = useSelector<RootState, number>(
    (state) => state.config.smallBreak
  );
  const intervalBreak = useSelector<RootState, number>(
    (state) => state.config.intervalBreak
  );
  const largeBreak = useSelector<RootState, number>(
    (state) => state.config.largeBreak
  );
  const checkedCount = useSelector<RootState, boolean>(
    (state) => state.config.checked
  );
  const [pomodoroIntervalTime, setPomodoroIntervalTime] =
    useState(pomodoroInterval);
  const [smallBreakTime, setSmallBreakTime] = useState(smallBreak);
  const [largeBreakTime, setLargeBreakTime] = useState(largeBreak);
  const [intervalTime, setIntervalTime] = useState(intervalBreak);
  const breakCount = breakCounter % intervalTime ? smallBreak : largeBreak;
  const [isTimeToBreak, setIsTimeToBreak] = useState(false);
  const [isBreakStarted, setIsBreakStarted] = useState(false);
  const [isBreakPaused, setIsBreakPaused] = useState(false);
  const [checkedValue, setCheckedValue] = useState(checkedCount);
  const [config, setConfig] = useState(false);
  const [taskTimerEnd, setTaskTimerEnd] = useState(false);
  const [breakTimerEnd, setBreakTimerEnd] = useState(false);
  const music = new Audio(audio);

  useEffect(() => {
    setTimer(pomodoroInterval * 60);
  }, [pomodoroInterval]);

  useEffect(() => {
    if (taskList.length === 0) {
      setIsStarted(false);
      setIsPaused(false);
      setIsBreakStarted(false);
      setIsBreakPaused(false);
      setIsTimeToBreak(false);
      setTimer(pomodoroInterval * 60);
      dispatch(resetCount());
    }
  }, [taskList.length]);

  //Таймер запущен
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        (isStarted && timer >= 0 && !isPaused) ||
        (isBreakStarted && timer >= 0 && !isBreakPaused)
      ) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [
    isStarted,
    isPaused,
    isBreakPaused,
    isBreakStarted,
    timer,
    isTimeToBreak,
  ]);

  //Записываем в статистику рабочее время
  useEffect(() => {
    if (isStarted || isPaused) {
      const interval = setInterval(() => {
        dispatch(statWork());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isStarted, timer, isPaused]);

  //Записываем в статистику общее время
  useEffect(() => {
    if (isStarted || isPaused || isBreakPaused || isBreakStarted) {
      const interval = setInterval(() => {
        dispatch(statTotal());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isStarted, timer, isPaused, isBreakPaused, isBreakStarted]);

  //Записываем в статистику время на паузе
  useEffect(() => {
    if (isPaused || isBreakPaused) {
      const interval = setInterval(() => {
        dispatch(statCountPause());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, isBreakPaused]);

  //Если время задачи закончилось
  useEffect(() => {
    if (isStarted && timer === 0) {
      setTaskTimerEnd(true);
      handleCompleteTask();
      if (checkedValue) {
        music.play();
      }
    }
  }, [isStarted, timer]);

  //Если время перерыва закончиоось
  useEffect(() => {
    if (isBreakStarted && timer === 0) {
      if (checkedValue) {
        music.play();
      }
      setBreakTimerEnd(true);
      handleCompleteBreak();
    }
  }, [isBreakStarted, timer]);

  function handleCompleteTask() {
    setIsStarted(false);
    setIsPaused(false);
    setTimer(breakCount * 60);
    dispatch(PomodoroIncreaseCount());
    setIsTimeToBreak(true);
    dispatch(statCount());
    dispatch(decreaseTask(taskList[0]));
    if (taskList[0].count === 1) {
      dispatch(deleteTask(taskList[0]));
    }
  }

  function handleCompleteBreak() {
    setIsBreakStarted(false);
    setIsBreakPaused(false);
    setIsTimeToBreak(false);
    setTimer(pomodoroInterval * 60);
    dispatch(breakIncreaseCount());
  }

  return (
    <div className={styles.timer}>
      {config && (
        <ConfigTimer
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          config={config}
          setConfig={setConfig}
          pomodoroIntervalTime={pomodoroIntervalTime}
          setPomodoroIntervalTime={setPomodoroIntervalTime}
          smallBreakTime={smallBreakTime}
          setSmallBreakTime={setSmallBreakTime}
          largeBreakTime={largeBreakTime}
          setLargeBreakTime={setLargeBreakTime}
          intervalTime={intervalTime}
          setIntervalTime={setIntervalTime}
        />
      )}
      <ContentTimerTop
        isStarted={isStarted}
        isPaused={isPaused}
        currentPomodoro={currentPomodoro}
        breakCounter={breakCounter}
        taskList={taskList}
        isTimeToBreak={isTimeToBreak}
      />
      <ContentTimerBottom
        setConfig={setConfig}
        setIsPaused={setIsPaused}
        isStarted={isStarted}
        isPaused={isPaused}
        setTimer={setTimer}
        taskList={taskList}
        setIsStarted={setIsStarted}
        timer={timer}
        handleCompleteTask={handleCompleteTask}
        isTimeToBreak={isTimeToBreak}
        setIsBreakStarted={setIsBreakStarted}
        setIsBreakPaused={setIsBreakPaused}
        handleCompleteBreak={handleCompleteBreak}
        isBreakStarted={isBreakStarted}
        isBreakPaused={isBreakPaused}
      />
      {(taskTimerEnd || breakTimerEnd) && checkedValue && (
        <ModalTimerEnd
          setTaskTimerEnd={setTaskTimerEnd}
          setBreakTimerEnd={setBreakTimerEnd}
          taskTimeEnd={taskTimerEnd}
        />
      )}
    </div>
  );
}
