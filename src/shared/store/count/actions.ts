import { ActionCreator } from "redux";

export const BREAKCOUNT = 'BREAKCOUNT'
export type BreakCountAction = {
    type: typeof BREAKCOUNT,
}
export const breakIncreaseCount: ActionCreator<BreakCountAction> = () => ({
    type: BREAKCOUNT,
});

export const COUNTRESET = 'COUNTRESET'
export type CountResetAction = {
    type: typeof COUNTRESET,
}
export const resetCount: ActionCreator<CountResetAction> = () => ({
    type: COUNTRESET,
});

export const POMODOROCOUNT = 'POMODOROCOUNT'
export type PomodoroCountAction = {
    type: typeof POMODOROCOUNT,
}
export const PomodoroIncreaseCount: ActionCreator<PomodoroCountAction> = () => ({
    type: POMODOROCOUNT,
});
