import {  Reducer } from "redux";
import { initialState } from "../reducer";
import { BreakCountAction, CountResetAction, PomodoroCountAction, BREAKCOUNT, POMODOROCOUNT, COUNTRESET } from "./actions";

type CountAction = BreakCountAction | CountResetAction | PomodoroCountAction

export type ICountState = {
    break: number,
    pomodoro: number,
}

export const countkReducer: Reducer<ICountState, CountAction> = (state = initialState.count, action) => {
    switch (action.type) {
        case BREAKCOUNT:
            return {
                ...state,
                break: state.break + 1
            }
        case POMODOROCOUNT:
            return {
                ...state,
                pomodoro: state.pomodoro + 1
            }

        case COUNTRESET:
            return {
                ...state,
                break: 1,
                pomodoro: 1,
            }
        default:
            return state
    }
}