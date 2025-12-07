/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { TimerState, TimerAction } from '../types/timer';
import { timerReducer, initialState } from '../reducers/timerReducer';

interface TimerContextType {
  state: TimerState;
  dispatch: React.Dispatch<TimerAction>;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  useEffect(() => {
    let interval: number | undefined;

    if (state.isActive && state.timeLeft > 0) {
      interval = window.setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    } else if (state.timeLeft === 0) {
      clearInterval(interval);
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