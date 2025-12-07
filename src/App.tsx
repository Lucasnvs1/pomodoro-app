import { GlobalStyle } from './styles/GlobalStyle';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerControls } from './components/TimerControls';
import { TimerMode } from './components/TimerModes';

import { useDocumentTitle } from './hooks/useDocumentTitle'; 
import { useTimer } from './contexts/TimerContext';

export function App() {

  const { state } = useTimer();

  useDocumentTitle(state.timeLeft, state.mode);

  return (
    <>
      <GlobalStyle />
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        background: '#121214' 
      }}>
        
        <TimerMode />
        <TimerDisplay />
        <TimerControls />

      </div>
    </>
  );
}