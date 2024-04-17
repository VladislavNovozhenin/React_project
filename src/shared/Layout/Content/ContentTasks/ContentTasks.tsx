import React from 'react';
import styles from './contenttasks.module.css';
import { Manual } from './Manual';
import { TaskList } from './TaskList';
import { TasksForm } from './TasksForm';
import { TaskTime } from './TaskTime';

export function ContentTasks() {

  return (
    <div className={styles.contentTask}>
      <Manual />
      <TasksForm />
      <TaskList/>
      <TaskTime/>
    </div>
  );
}
