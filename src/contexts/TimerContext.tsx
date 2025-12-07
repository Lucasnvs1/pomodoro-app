/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { TimerState, TimerAction } from '../types/timer';
import { timerReducer, initialState } from '../reducers/timerReducer';

const ALARM_URL = 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg';
const audio = new Audio(ALARM_URL);

interface TimerContextType {
  state: TimerState;
  dispatch: React.Dispatch<TimerAction>;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);
const STORAGE_KEY = '@pomodoro-dev:state-1.0.0';

export function TimerProvider({ children }: { children: ReactNode }) {
  const initializer = (initial: TimerState): TimerState => {
    const savedJSON = localStorage.getItem(STORAGE_KEY);

    if (savedJSON) {
      const parsedState = JSON.parse(savedJSON);
      return { ...parsedState, isActive: false };
    }

    return initial;
  };

  const [state, dispatch] = useReducer(timerReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    let interval: number | undefined;

    if (state.isActive) {
      interval = window.setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }

    if (state.timeLeft === 0) {
      audio.play().catch((error) => console.log('Erro som:', error));
    }

    return () => clearInterval(interval);
  }, [state.isActive, state.timeLeft]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer deve ser usado dentro de um TimerProvider');
  }
  return context;
}