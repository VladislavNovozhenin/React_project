import { FormEvent, useState } from 'react';
import styles from './tasksform.module.css';
// import { RootState, updateTask } from '../../../../../App';
import { useDispatch} from 'react-redux';
import { ChangeEvent } from 'react';
import { generateId } from '../../../../utils/generateRendomId';
import { newTask } from '../../../../store/task.ts/actions';
import React from 'react';

export function TasksForm() {

  const [value, setValue] = useState('')

  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const defaultTask = {
    id: generateId(),
    title: value,
    count: 1,
    edit: false,
    task_finished: 1
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(newTask(defaultTask))
    setValue('')
  }

  return (
    <form className={styles.tasksform} action="" onSubmit={handleSubmit}>
      <input className={styles.tasksInput} type="text" onChange={handleChange} value={value} placeholder='Название задачи' />
      <button className={styles.tasksButton} disabled={value? false : true}>
        Добавить
      </button>
    </form>
  );
}
