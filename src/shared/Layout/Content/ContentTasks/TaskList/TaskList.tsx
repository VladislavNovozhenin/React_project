import React, { useRef } from 'react';
import styles from './tasklist.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';
import { ITaskState } from '../../../../store/task.ts/reducer';
import { Task } from './Task/Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function TaskList() {
  const taskList = useSelector<RootState, ITaskState[]>(state => state.task)
  const refUl = useRef<HTMLUListElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const value = taskList.length > 0
  const animationClassnamesMap = {
    enter: styles.taskEnter,
    enterActive: styles.taskEnterActive,
    exit: styles.taskExit,
    exitActive: styles.taskExitActive,
  };

  return (
    <CSSTransition
      nodeRef={refUl}
      timeout={500}
      in={value}
      classNames={animationClassnamesMap}
    >
      <ul ref={refUl} className={styles.contentTaskList}>
        <TransitionGroup>
          {taskList.map((task: ITaskState) => {
            return (
              <CSSTransition
                key={task.id}
                // nodeRef={ref}
                timeout={500}
                classNames={animationClassnamesMap}
              >
                <div ref={ref}>
                  <Task
                    task={task}
                  />
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </ul>
    </CSSTransition>


  );
}
