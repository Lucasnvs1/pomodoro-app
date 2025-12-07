export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export interface TimerState {
    mode: TimerMode;
    timeLeft: number;
    isActive: boolean;
    cyclesCompleted: number;
}

export interface TimerConfig {
    focus: number;
    shortBreak: number;
    longBreak: number;
}

export type TimerAction =
  | { type: 'START_TIMER' }
  | { type: 'PAUSE_TIMER' }
  | { type: 'RESET_TIMER' }
  | { type: 'TICK' }
  | { type: 'SET_MODE'; payload: TimerMode };