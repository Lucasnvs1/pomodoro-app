import styled from 'styled-components';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useTimer } from '../contexts/TimerContext';

const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

const ButtonBase = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: all 0.2s;
   color: white;
   padding: 0 1.5rem;
   height: 3.5rem;
   font-weight: bold;
   font-size: 1rem;

   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
`;

const PrimaryButton = styled(ButtonBase) <{ $variant: 'start' | 'pause' }>`
  background: ${(props) => (props.$variant === 'start' ? '#00875f' : '#AB222E')};
  flex: 1;
  min-width: 150px;

  &:hover {
    background: ${(props) => (props.$variant === 'start' ? '#015f43' : '#7A1921')};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: #323238;
  width: 3.5rem; /* Botão quadrado */
  padding: 0; 

  &:hover {
    background: #29292e;
  }
`;

export function TimerControls() {
    const { state, dispatch } = useTimer();

    return (
        <Container>

            {!state.isActive ? (
                <PrimaryButton
                    $variant="start"
                    onClick={() => dispatch({ type: 'START_TIMER' })}
                >
                    <Play size={24} style={{ marginRight: '8px' }} />
                    Começar
                </PrimaryButton>
            ) : (
                <PrimaryButton
                    $variant="pause"
                    onClick={() => dispatch({ type: 'PAUSE_TIMER' })}
                >
                    <Pause size={24} style={{ marginRight: '8px' }} />
                    Pausar
                </PrimaryButton>
            )}


            <SecondaryButton
                onClick={() => dispatch({ type: 'RESET_TIMER' })}
                title="Reiniciar Timer"
            >
                <RotateCcw size={20} />
            </SecondaryButton>
        </Container>
    );
}