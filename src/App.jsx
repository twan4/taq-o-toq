import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SetupScreen from './screens/SetupScreen';
import GameBoardScreen from './screens/GameBoardScreen';
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  
  // This state will hold all the settings before passing them to the Game Board
  const [gameConfig, setGameConfig] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('login');
  };

  const handleStartGame = () => {
    setCurrentScreen('setup');
  };

  const handleFinishSetup = (config) => {
    setGameConfig(config);
    setCurrentScreen('game'); // Transition to Phase 4
  };

  const handleEndGame = () => {
    setGameConfig(null);
    setCurrentScreen('home');
  };

  return (
    <div>
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      {currentScreen === 'home' && <HomeScreen user={currentUser} onLogout={handleLogout} onStartGame={handleStartGame} />}
      {currentScreen === 'setup' && <SetupScreen onFinishSetup={handleFinishSetup} onBack={() => setCurrentScreen('home')} />}
      {currentScreen === 'game' && <GameBoardScreen config={gameConfig} onEndGame={handleEndGame} />}
    </div>
  );
}

export default App;
