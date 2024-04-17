
import { useDispatch } from 'react-redux';
import { TaskDecrease } from '../../../../../../../icons/taskDecrease';
import { TaskDelete } from '../../../../../../../icons/taskDelete';
import { TaskEdit } from '../../../../../../../icons/taskEdit';
import { TaskEncrease } from '../../../../../../../icons/taskIncrease';
import { ITaskState } from '../../../../../../../store/task.ts/reducer';
import styles from './menudropdown.module.css';
import { useState } from 'react';
import { ModalDelete } from './ModalDelete';
import { increaseTask, decreaseTask, editTask } from '../../../../../../../store/task.ts/actions';
import React from 'react';

interface IMenuDropdownProps {
	task: ITaskState,
}

export function MenuDropdown({ task }: IMenuDropdownProps) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const dispatch = useDispatch();
	
	function handleIncreaseTask() {
		dispatch(increaseTask(task));
	}

	function handleDecreaseTask() {
		dispatch(decreaseTask(task));
	}

	function handleEditTask() {
		dispatch(editTask(task));
	}

	return (
		<div>
			<ul className={styles.dropdownList}>
				<li className={styles.dropdownItem}>
					<button onClick={handleIncreaseTask} className={styles.btn} >
						<TaskEncrease />
						Увеличить
					</button>
				</li>
				<li className={styles.dropdownItem}>
					<button onClick={handleDecreaseTask} className={styles.btn} disabled={task.count === 1}>
						<TaskDecrease />
						Уменьшить
					</button>
				</li>
				<li className={styles.dropdownItem}>
					<button onClick={handleEditTask} className={styles.btn}>
						<TaskEdit />
						Редактировать
					</button>
				</li>
				<li className={styles.dropdownItem}>
					<button onClick={() => { setIsModalOpened(true) }} className={styles.btn}>
						<TaskDelete />
						Удалить
					</button>
				</li>
			</ul >
			{isModalOpened &&
			<ModalDelete 
			task={task}
			setIsModalOpened={setIsModalOpened}/>
			}
		</div>
	);
}


