import styled from "styled-components";
import { useTimer } from "../contexts/TimerContext";
import type { TimerMode } from "../types/timer";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-botton: 2rem;
  background: #202024
  padding: 0.5rem;
  border-radius: 8px;  
`;

const ModeButton = styled.button<{ $isActive: boolean }>`
  background: ${(props) => (props.$isActive ? '#00875f' : 'transparent')};
  color: ${(props) => (props.$isActive ? '#ffffff' : '#c4c4cc')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
  transition: all 0.2;

  &:hover {
    background: ${(props) => (props.$isActive ? '#00875f' : '#29292e')};
  }
`;

export function TimerMode() {
    const { state, dispatch } = useTimer();

    const handleModeChange = (mode: TimerMode) => {
        dispatch({ type: 'SET_MODE', payload: mode });
    };

    return (
        <Container>
            <ModeButton
                $isActive={state.mode === 'focus'}
                onClick={() => handleModeChange('focus')}
            >
                Foco
            </ModeButton>

            <ModeButton
                $isActive={state.mode === 'shortBreak'}
                onClick={() => handleModeChange('shortBreak')}
            >
                Pausa Curta
            </ModeButton>

            <ModeButton
                $isActive={state.mode === 'longBreak'}
                onClick={() => handleModeChange('longBreak')}
            >
                Pausa Longa
            </ModeButton>
        </Container>
    );
}