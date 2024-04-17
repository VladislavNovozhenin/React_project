import { Reducer } from "redux";
import { initialState } from "../reducer";
import { PomodoroTimeAction, LargeBreakAction, SmallBreakAction, SMALLBREAK, LARGEBREAK, POMODOROTIME, IntervalBreakAction, INTERVALBREAK, CHECKED, CheckedAction, IncreasePomodoroTimeAction, INCREASEPOMODOROTIME } from "./actions";

type ConfigAction = PomodoroTimeAction | LargeBreakAction | SmallBreakAction | IntervalBreakAction | CheckedAction | IncreasePomodoroTimeAction

export type IConfigState = {
    pomodoroTime: number,
    smallBreak: number,
    largeBreak: number,
    intervalBreak: number,
    checked: boolean,
}


export const configkReducer: Reducer<IConfigState, ConfigAction> = (state = initialState.config, action) => {
    switch (action.type) {
        case SMALLBREAK:
            return {
                ...state,
                smallBreak: action.number
            }
        case LARGEBREAK:
            return {
                ...state,
                largeBreak: action.number
            }
        case INTERVALBREAK:
            return {
                ...state,
                intervalBreak: action.number
            }
        case POMODOROTIME:
            return {
                ...state,
                pomodoroTime: action.number
            }
            case INCREASEPOMODOROTIME:
            return {
                ...state,
                pomodoroTime: state.pomodoroTime + 1
            }
        case CHECKED:
            return {
                ...state,
                checked: action.value
            }
        default:
            return state
    }
}
