import { Reducer } from "redux";
import { ICountState, countkReducer } from "./count/reducer";
import { IConfigState, configkReducer } from "./config/reducer.";
import { PomodoroTimeAction, SmallBreakAction, LargeBreakAction, POMODOROTIME, SMALLBREAK, LARGEBREAK, IntervalBreakAction, INTERVALBREAK, CheckedAction, CHECKED } from "./config/actions";
import { BreakCountAction, CountResetAction, PomodoroCountAction, BREAKCOUNT, COUNTRESET, POMODOROCOUNT } from "./count/actions";
import { AddTaskAction, IncreaseTaskAction, DecreaseTaskAction, DeleteTaskAction, EditTaskAction, RenameTaskAction, FinishTaskAction, NEWTASK, INCREASETASK, DECREASETASK, DELETETASK, EDITTASK, RENAMETASK, FINISHTASK } from "./task.ts/actions";
import { ITaskState, taskReducer } from "./task.ts/reducer";
import { IStatState, statReducer } from "./stat/reducer";
import { StatPauseAction, StatStopCountAction, StatCountAction, StatWorkAction, StatTotalAction, StatNewDayAction, STATPAUSE, STATSTOPCOUNT, STATCOUNT, STATWORK, STATTOTAL, STATADDNEWDAY } from "./stat/actions";

export type RootState = {
    task: ITaskState[],
    config: IConfigState,
    count: ICountState
    stat: IStatState[]
}

const date = localStorage.getItem('state')

export const initialState: RootState = date === null
    ? {
        task: [],
        config: {
            pomodoroTime: 25,
            smallBreak: 5,
            largeBreak: 30,
            intervalBreak: 4,
            checked: false,
        },
        count: {
            break: 1,
            pomodoro: 1
        },
        stat: []
    }
    : JSON.parse(date)


type Action = AddTaskAction
    | IncreaseTaskAction
    | DecreaseTaskAction
    | DeleteTaskAction
    | EditTaskAction
    | RenameTaskAction
    | FinishTaskAction
    | BreakCountAction
    | CountResetAction
    | PomodoroCountAction
    | PomodoroTimeAction
    | SmallBreakAction
    | LargeBreakAction
    | IntervalBreakAction
    | StatPauseAction
    | StatStopCountAction
    | StatCountAction
    | StatWorkAction
    | StatTotalAction
    | StatNewDayAction
    | CheckedAction

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case NEWTASK:
        case INCREASETASK:
        case DECREASETASK:
        case DELETETASK:
        case EDITTASK:
        case RENAMETASK:
        case FINISHTASK:
            return {
                ...state,
                task: taskReducer(state.task, action),
            }
        case BREAKCOUNT:
        case COUNTRESET:
        case POMODOROCOUNT:
            return {
                ...state,
                count: countkReducer(state.count, action),
            }
        case POMODOROTIME:
        case SMALLBREAK:
        case INTERVALBREAK:
        case LARGEBREAK:
        case CHECKED:
            return {
                ...state,
                config: configkReducer(state.config, action)
            }
        case STATPAUSE:
        case STATSTOPCOUNT:
        case STATCOUNT:
        case STATWORK:
        case STATTOTAL:
        case STATADDNEWDAY:
            return {
                ...state,
                stat: statReducer(state.stat, action)
            }

        default:
            return state;
    }
}

