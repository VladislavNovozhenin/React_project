import { ActionCreator } from "redux";

export const STATPAUSE = 'STATPAUSE'
export type StatPauseAction = {
    type: typeof STATPAUSE,
}
export const statCountPause: ActionCreator<StatPauseAction> = () => ({
    type: STATPAUSE,
});

export const STATSTOPCOUNT = 'STATSTOPCOUNT'
export type StatStopCountAction = {
    type: typeof STATSTOPCOUNT,
}
export const statStopCount: ActionCreator<StatStopCountAction> = () => ({
    type: STATSTOPCOUNT,
});

export const STATWORK = 'STATWORK'
export type StatWorkAction = {
    type: typeof STATWORK,
}
export const statWork: ActionCreator<StatWorkAction> = () => ({
    type: STATWORK,
});

export const STATCOUNT = 'STATCOUNT'
export type StatCountAction = {
    type: typeof STATCOUNT,
}
export const statCount: ActionCreator<StatCountAction> = () => ({
    type: STATCOUNT,
});

export const STATTOTAL = 'STATTOTAL'
export type StatTotalAction = {
    type: typeof STATTOTAL,
}
export const statTotal: ActionCreator<StatTotalAction> = () => ({
    type: STATTOTAL,
});

export const STATADDNEWDAY = 'STATADDNEWDAY'
export type StatNewDayAction = {
    type: typeof STATADDNEWDAY,
}
export const statAddNewDay: ActionCreator<StatNewDayAction> = () => ({
    type: STATADDNEWDAY,
});
