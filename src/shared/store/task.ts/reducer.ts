import { Reducer } from "redux";
import { AddTaskAction, IncreaseTaskAction, DecreaseTaskAction, DeleteTaskAction, EditTaskAction, RenameTaskAction, FinishTaskAction, NEWTASK, INCREASETASK, DECREASETASK, EDITTASK, RENAMETASK, DELETETASK, FINISHTASK } from "./actions";

type TaskActions = AddTaskAction 
| IncreaseTaskAction 
| DecreaseTaskAction 
| DeleteTaskAction 
| EditTaskAction 
| RenameTaskAction 
| FinishTaskAction

export type ITaskState = {
    id: string,
    title: string,
    count: number,
    edit: boolean,
    task_finished: number
}

export const taskReducer: Reducer<ITaskState[], TaskActions> = (state = [], action) => {
    switch (action.type) {
        case NEWTASK:
            return [
                ...state,
                {
                    id: action.data.id,
                    title: action.data.title,
                    count: action.data.count,
                    edit: action.data.edit,
                    task_finished: action.data.task_finished
                }
            ];
        case INCREASETASK: {
            const updatedState = state.map(task => {
                if (task.id === action.data.id) {
                    return {
                        ...task,
                        count: action.data.count + 1,
                    };
                }
                return task;
            });
            return [...updatedState];
        }
        case DECREASETASK: {
            const updatedState = state.map(task => {
                if (task.id === action.data.id) {
                    return {
                        ...task,
                        count: action.data.count - 1,
                    };
                }
                return task;
            });
            return [...updatedState];
        }
        case EDITTASK: {
            const updatedState = state.map(task => {
                if (task.id === action.data.id) {
                    return {
                        ...task,
                        edit: true
                    };
                }
                return task;
            });
            return [...updatedState];
        }
        case RENAMETASK: {
            const updatedState = state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        edit: false,
                        title: action.title
                    };
                }
                return task;
            });
            return [...updatedState];
        }
        case DELETETASK: {
            const updatedState = state.filter(task => {
                return task.id !== action.data.id
            });
            return updatedState;
        }
        case FINISHTASK: {
            const updatedState = state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        task_finished: task.task_finished + 1,
                    };
                }
                return task;
            });
            return [...updatedState];
        }
        default:
            return state
    }
}