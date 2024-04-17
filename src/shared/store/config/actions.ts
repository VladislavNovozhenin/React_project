import { ActionCreator } from "redux";

export const SMALLBREAK = 'SMALLBREAK'
export type SmallBreakAction = {
    type: typeof SMALLBREAK,
    number: number,
}
export const smallBreakCount: ActionCreator<SmallBreakAction> = (number: number) => ({
    type: SMALLBREAK,
    number,
});

export const LARGEBREAK = 'LARGEBREAK'
export type LargeBreakAction = {
    type: typeof LARGEBREAK,
    number: number,
}
export const largeBreakCount: ActionCreator<LargeBreakAction> = (number: number) => ({
    type: LARGEBREAK,
    number,
});

export const INTERVALBREAK = 'INTERVALBREAK'
export type IntervalBreakAction = {
    type: typeof INTERVALBREAK,
    number: number,
}
export const IntervalBreakCount: ActionCreator<IntervalBreakAction> = (number: number) => ({
    type: INTERVALBREAK,
    number,
});

export const POMODOROTIME = 'POMODOROTIME'
export type PomodoroTimeAction = {
    type: typeof POMODOROTIME,
    number: number,
}
export const pomodoroTimeCount: ActionCreator<PomodoroTimeAction> = (number: number) => ({
    type: POMODOROTIME,
    number,
});

export const INCREASEPOMODOROTIME = 'INCREASEPOMODOROTIME'
export type IncreasePomodoroTimeAction = {
    type: typeof INCREASEPOMODOROTIME,
}
export const increasePomodoroTimeCount: ActionCreator<IncreasePomodoroTimeAction> = () => ({
    type: INCREASEPOMODOROTIME,
});

export const CHECKED = 'CHECKED'
export type CheckedAction = {
    type: typeof CHECKED,
    value: boolean,
}
export const checkedCount: ActionCreator<CheckedAction> = (value: boolean) => ({
    type: CHECKED,
    value,
});