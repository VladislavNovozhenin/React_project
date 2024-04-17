import { ActionCreator } from "redux";
import { ITaskState } from "./reducer";


export const NEWTASK = 'NEWTASK'
export type AddTaskAction = {
    type: typeof NEWTASK,
    data: ITaskState
}
export const newTask: ActionCreator<AddTaskAction> = (data: ITaskState) => ({
    type: NEWTASK,
    data,
});

export const INCREASETASK = 'INCREASETASK'
export type IncreaseTaskAction = {
    type: typeof INCREASETASK,
    data: ITaskState
}
export const increaseTask: ActionCreator<IncreaseTaskAction> = (data: ITaskState) => ({
    type: INCREASETASK,
    data,
});

export const DECREASETASK = 'DECREASETASK'
export type DecreaseTaskAction = {
    type: typeof DECREASETASK 
    data: ITaskState
}
export const decreaseTask: ActionCreator<DecreaseTaskAction> = (data: ITaskState) => ({
    type: DECREASETASK,
    data,
});

export const DELETETASK = 'DELETETASK'
export type DeleteTaskAction = {
    type: typeof DELETETASK,
    data: ITaskState
}
export const deleteTask: ActionCreator<DeleteTaskAction> = (data: ITaskState) => ({
    type: DELETETASK,
    data,
});

export const EDITTASK = 'EDITTASK'
export type EditTaskAction = {
    type: typeof EDITTASK,
    data: ITaskState
}
export const editTask: ActionCreator<EditTaskAction> = (data: ITaskState) => ({
    type: EDITTASK,
    data,
});

export const RENAMETASK = 'RENAMETASK'
export type RenameTaskAction = {
    type: typeof RENAMETASK,
    id: string,
    title: string,
}
export const renameTask: ActionCreator<RenameTaskAction> = (id: string, title: string) => ({
    type: RENAMETASK,
    id,
    title,
});

export const FINISHTASK = 'FINISHTASK'
export type FinishTaskAction = {
    type: typeof FINISHTASK,
    id: string,
}
export const finishTask: ActionCreator<FinishTaskAction> = (id: string) => ({
    type: FINISHTASK,
    id,
});



