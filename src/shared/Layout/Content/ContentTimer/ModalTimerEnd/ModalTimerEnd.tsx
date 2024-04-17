import React from 'react';
import styles from './modaltimerend.module.css';
interface IModalTimerEndProps {
  setTaskTimerEnd: React.Dispatch<React.SetStateAction<boolean>>
  setBreakTimerEnd: React.Dispatch<React.SetStateAction<boolean>>
  taskTimeEnd: boolean
}

export function ModalTimerEnd({ setBreakTimerEnd, setTaskTimerEnd, taskTimeEnd}: IModalTimerEndProps) {
  return (
    <div className={styles.modal} >
      <div className={styles.modalContainer}>
        <h3 className={styles.modalTitle}>
          {taskTimeEnd 
            ? 'Время задачи окончено'
            : 'Перерыв окончен'
          }
        </h3>
        <button onClick={() => taskTimeEnd ? setTaskTimerEnd(false) : setBreakTimerEnd(false)} className={styles.modalButton}>Закрыть</button>
      </div>
    </div>
  );
}
