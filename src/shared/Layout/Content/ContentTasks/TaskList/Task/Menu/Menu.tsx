import React from 'react';
import styles from './menu.module.css';
import { ITaskState } from '../../../../../../store/task.ts/reducer';
import { Dropdown } from '../../../../../../Dropdown';
import { TaskButton } from '../../../../../../icons/taskButton';
import { MenuDropdown } from './MenuDropdown';

interface IMenuProps {
  task: ITaskState
}

export function Menu({ task }: IMenuProps) {
  return (
    <Dropdown
      button={
        <button className={styles.taskButton}>
          <TaskButton />
        </button>
      }
    >
      <div className={styles.dropdown}  >
        <MenuDropdown task={task} />
      </div>
    </Dropdown>
  );
}
