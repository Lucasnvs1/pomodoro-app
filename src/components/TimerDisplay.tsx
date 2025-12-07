import styled from 'styled-components';
import { useTimer } from '../contexts/TimerContext';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TimeValue = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: #e1e1e6;
  font-variant-numeric: tabular-nums; /* Evita que os números "pulem" quando mudam */
  line-height: 1;
  text-shadow: 0 0 20px rgba(0,0,0,0.5);
`;

const StatusLabel = styled.span`
  font-size: 1.5rem;
  color: #00875f; /* Um verde bonito */
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-top: 1rem;
`;

export function TimerDisplay() {
  const { state } = useTimer();
  const minutes = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const seconds = (state.timeLeft % 60).toString().padStart(2, '0');

  const statusText = {
    focus: 'Foco',
    shortBreak: 'Pausa Curta',
    longBreak: 'Pausa Longa'
  }[state.mode];

  return (
    <DisplayContainer>
      <TimeValue>{minutes}:{seconds}</TimeValue>
      <StatusLabel>{state.isActive ? 'Rodando' : statusText}</StatusLabel>
    </DisplayContainer>
  );
}