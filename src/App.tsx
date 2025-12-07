import { GlobalStyle } from './styles/GlobalStyle';
import { useTimer } from './contexts/TimerContext';
import { TimerDisplay } from './components/TimerDisplay';

export function App() {
  const { dispatch } = useTimer(); 

  return (
    <>
      <GlobalStyle />
      
      {/* Container Centralizado para ficar bonito na tela */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh' 
      }}>
        
        {/* Aqui entra o componente que você criou! */}
        <TimerDisplay />

        {/* Botões Provisórios (Logo vamos criar um componente bonito para eles também) */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={() => dispatch({ type: 'START_TIMER' })}>
            Iniciar
          </button>
          
          <button onClick={() => dispatch({ type: 'PAUSE_TIMER' })}>
            Pausar
          </button>
          
          <button onClick={() => dispatch({ type: 'RESET_TIMER' })}>
            Resetar
          </button>
        </div>

      </div>
    </>
  );
}