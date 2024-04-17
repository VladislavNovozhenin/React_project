import React, { useRef } from 'react';
import styles from './modaldelete.module.css';
import { ModalTaskDelete } from '../../../../../../../../icons/modalTaskDelete';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { ITaskState } from '../../../../../../../../store/task.ts/reducer';
import { deleteTask } from '../../../../../../../../store/task.ts/actions';
// import ReactDOM from 'react-dom';

interface IModalDelete {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
  task: ITaskState,
}

export function ModalDelete({ setIsModalOpened, task }: IModalDelete) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const node = document.body;
  if (!node) return null

  function handleDeleteTask() {
		dispatch(deleteTask(task));
    setIsModalOpened(false)
	}


  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <div className={styles.modalContainer}>
        <button onClick={() => { setIsModalOpened(false) }} className={styles.modalCancelTop}>
          <ModalTaskDelete />
        </button>
        <h3 className={styles.modalTitle}>Удалить задачу?</h3>
        <button onClick={handleDeleteTask} className={styles.modalDelete}>Удалить</button>
        <button onClick={() => { setIsModalOpened(false) }} className={styles.modalCancelBottom}>Отмена</button>
      </div>
    </div>
  ), node);
}
