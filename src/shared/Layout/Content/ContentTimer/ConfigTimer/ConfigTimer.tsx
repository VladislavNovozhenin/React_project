import React, { FormEvent, useRef } from 'react';
import styles from './configtimer.module.css';
import { ModalTaskDelete } from '../../../../icons/modalTaskDelete';
import { useDispatch } from 'react-redux';
import { pomodoroTimeCount, smallBreakCount, largeBreakCount, IntervalBreakCount, checkedCount } from '../../../../store/config/actions';

interface IConfigTimerProps {
  setConfig: React.Dispatch<React.SetStateAction<boolean>>,
  config: boolean,
  pomodoroIntervalTime: number
  setPomodoroIntervalTime: React.Dispatch<React.SetStateAction<number>>
  smallBreakTime: number
  setSmallBreakTime: React.Dispatch<React.SetStateAction<number>>
  largeBreakTime: number
  setLargeBreakTime: React.Dispatch<React.SetStateAction<number>>
  intervalTime: number
  setIntervalTime: React.Dispatch<React.SetStateAction<number>>
  checkedValue: boolean
  setCheckedValue: React.Dispatch<React.SetStateAction<boolean>>
}

export function ConfigTimer(props: IConfigTimerProps) {

  const { setConfig,
    pomodoroIntervalTime,
    setPomodoroIntervalTime,
    smallBreakTime,
    setSmallBreakTime,
    largeBreakTime,
    setLargeBreakTime,
    intervalTime,
    setIntervalTime,
    checkedValue,
    setCheckedValue,
  } = props

  const dispatch = useDispatch();
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    event.stopPropagation()
  }

  function handleOnKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode == 13 || event.which == 13) {
      event.preventDefault()
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value !== "") {
      return parseInt(event.target.value);
    } else {
      return 0;
    }
  }

  function handlePomodoroIntervalTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = handleChange(event)
    setPomodoroIntervalTime(newValue)
  }

  function handleSmallBreakTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = handleChange(event)
    setSmallBreakTime(newValue)
  }

  function handleLargeBreakTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = handleChange(event)
    setLargeBreakTime(newValue)
  }

  function handleIntervalTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = handleChange(event)
    setIntervalTime(newValue)
  }

  function saveSettings() {
    dispatch(pomodoroTimeCount(pomodoroIntervalTime));
    dispatch(smallBreakCount(smallBreakTime));
    dispatch(largeBreakCount(largeBreakTime));
    dispatch(IntervalBreakCount(intervalTime));
    dispatch(checkedCount(checkedValue))
    setConfig(false)
  }

  function resetSettings() {
    dispatch(pomodoroTimeCount(25));
    dispatch(smallBreakCount(5));
    dispatch(largeBreakCount(30));
    dispatch(IntervalBreakCount(4));
    dispatch(checkedCount(false))
    setPomodoroIntervalTime(25)
    setSmallBreakTime(5)
    setLargeBreakTime(30)
    setIntervalTime(4)
    setCheckedValue(false)
  }

  function handleChecked() {
    setCheckedValue(!checkedValue)
  }

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.modal} >
      <div className={styles.modalContainer} ref={ref}>
        <button onClick={() => setConfig(false)} className={styles.modalCancelTop}>
          <ModalTaskDelete />
        </button>
        <h3 className={styles.modalTitle}>
          Настройки
        </h3>
        <form onSubmit={handleSubmit} className={styles.modalForm} action="">
          <label className={styles.modalLabel} htmlFor="">
            <input onChange={handlePomodoroIntervalTimeChange} value={pomodoroIntervalTime} onKeyDown={handleOnKeyPress} min={1} max={60} className={styles.modalInput} type="number" />
            Продолжительность помидора (мин.)
          </label>
          <label className={styles.modalLabel} htmlFor="">
            <input onChange={handleSmallBreakTimeChange} value={smallBreakTime} onKeyDown={handleOnKeyPress} min={1} max={60} className={styles.modalInput} type="number" />
            Продолжительность короткого перерыва (мин.)
          </label>
          <label className={styles.modalLabel} htmlFor="">
            <input onChange={handleLargeBreakTimeChange} value={largeBreakTime} onKeyDown={handleOnKeyPress} min={1} max={60} className={styles.modalInput} type="number" />
            Продолжительность длинного перерыва (мин.)
          </label>
          <label className={styles.modalLabel} htmlFor="">
            <input onChange={handleIntervalTimeChange} onKeyDown={handleOnKeyPress} min={1} max={60} value={intervalTime} className={styles.modalInput} type="number" />
            Интервал длинного перерыва
          </label>
          <label className={styles.modalLabel} htmlFor="">
            <input onChange={handleChecked} onKeyDown={handleOnKeyPress} className={`${styles.modalInput} ${styles.modalInputCheckbox}`} type="checkbox" checked={checkedValue} />
            Уведомление об окончании работы таймера
          </label>
          <div className={styles.modalBtnGroup}>
            <button onClick={() => setConfig(false)} className={styles.modalBtn}>Отмена</button>
            <button onClick={resetSettings} className={styles.modalBtn}>Сброс</button>
            <button type='submit' onClick={saveSettings} className={styles.modalBtn}>Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
}
