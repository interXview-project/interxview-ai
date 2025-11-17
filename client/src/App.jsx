import { useState } from 'react';
import { LoginScreen } from './pages/LoginScreen';
import { SignupScreen } from './pages/SignupScreen';

export default function App() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a1628]">
      {currentView === 'login' ? (
        <LoginScreen onSwitchToSignup={() => setCurrentView('signup')} />
      ) : (
        <SignupScreen onSwitchToLogin={() => setCurrentView('login')} />
      )}
    </div>
  );
}
