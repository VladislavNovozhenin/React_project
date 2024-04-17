import React, { useRef, useState } from "react";
import styles from "./task.module.css";
import { Menu } from "./Menu";
import { ITaskState } from "../../../../../store/task.ts/reducer";
import { useDispatch } from "react-redux";
import { renameTask } from "../../../../../store/task.ts/actions";

interface ITaskProps {
  task: ITaskState;
}

export function Task({ task }: ITaskProps) {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState(task.title);
  const ref = useRef<HTMLInputElement>(null);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleSubmit(event: React.KeyboardEvent) {
    if (event.code === "Enter") {
      dispatch(renameTask(task.id, taskTitle));
    }
  }

  return (
    <li className={styles.task}>
      <div className={styles.taskNumber}>{task.count}</div>
      {task.edit ? (
        <input
          ref={ref}
          className={styles.taskInput}
          type="text"
          value={taskTitle}
          onChange={handleChange}
          onKeyPress={handleSubmit}
          onBlur={() => dispatch(renameTask(task.id, taskTitle))}
        />
      ) : (
        <span className={styles.taskDescr}>{taskTitle}</span>
      )}
      <Menu task={task} />
    </li>
  );
}
