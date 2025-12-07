import type { TimerState, TimerAction, TimerMode } from "../types/timer";

const TIMES: Record<TimerMode, number> = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
};

export const initialState: TimerState = {
    mode: 'focus',
    timeLeft: TIMES.focus,
    isActive: false,
    cyclesCompleted: 0,
};

export function timerReducer(state: TimerState, action: TimerAction): TimerState {
    switch (action.type) {
        case 'START_TIMER':
            return { ...state, isActive: true };

        case 'PAUSE_TIMER':
            return { ...state, isActive: false };

        case 'RESET_TIMER':
            return {
                ...state, isActive: false,
                timeLeft: TIMES[state.mode],
            };

        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload,
                isActive: false,
                timeLeft: TIMES[action.payload],
            };

        case 'TICK':
            if (state.timeLeft <= 0) {
                return {
                    ...state,
                    isActive: false,
                    cyclesCompleted: state.mode === 'focus' ? state.cyclesCompleted + 1 : state.cyclesCompleted,
                };
            }

            return {
                ...state,
                timeLeft: state.timeLeft - 1,
            };

        default:
            return state

    }
};