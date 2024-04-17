import {  Reducer } from "redux";
import { initialState } from "../reducer";
import moment from "moment";
import { StatPauseAction, StatStopCountAction, StatCountAction, StatWorkAction, StatTotalAction, StatNewDayAction, STATADDNEWDAY, STATPAUSE, STATSTOPCOUNT, STATCOUNT, STATWORK, STATTOTAL } from "./actions";

export type IStatState = {
    date: string,
    count: number,
    stop_count: number,
    work_sec: number,
    pause_sec: number,
    total_sec: number,
}

type StatAction = StatPauseAction | StatStopCountAction | StatCountAction | StatWorkAction | StatTotalAction | StatNewDayAction



export const statReducer: Reducer<IStatState[], StatAction> = (state = initialState.stat, action) => {
    switch (action.type) {
        case STATADDNEWDAY: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.find(item => item.date === currentDate)
              if (!updateState) {
                state.push({
                    date: moment().format('YYYY-MM-DD'),
                    count: 0,
                    stop_count: 0,
                    work_sec: 0,
                    pause_sec: 0,
                    total_sec: 0,
                })
              }  
            return [...state]
        }
        case STATPAUSE: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.map(item => {
                if (item.date === currentDate) {
                    return {
                        ...item,
                        pause_sec: item.pause_sec + 1
                    }
                }
                return item
            });
            return [...updateState]
        }
        case STATSTOPCOUNT: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.map(item => {
                if (item.date === currentDate) {
                    return {
                        ...item,
                        stop_count: item.stop_count + 1,
                    }
                }
                return item
            });
            return [...updateState]
        }
        case STATCOUNT: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.map(item => {
                if (item.date === currentDate) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })
            return [...updateState]
        }
        case STATWORK: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.map(item => {
                if (item.date === currentDate) {
                    return {
                        ...item,
                        work_sec: item.work_sec + 1
                    }
                }
                return item
            })
            return [...updateState]
        }
        case STATTOTAL: {
            const currentDate = moment().format('YYYY-MM-DD');
            const updateState = state.map(item => {
                if (item.date === currentDate) {
                    return {
                        ...item,
                        total_sec: item.total_sec + 1
                    }
                }
                return item
            })
            return [...updateState]
        }

        default:
            return state
    }
}
