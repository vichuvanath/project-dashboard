import { useState } from 'react';
import LoginScreen from './screens/Login';
import UploadPaper from './screens/UploadPaper';
import PaperRepository from './screens/PaperRepository';
import ManagePapers from './screens/ManagePapers';
import ClassesScreen from './screens/Classes';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen setScreen={setCurrentScreen} />;
      case 'upload':
        return <UploadPaper setScreen={setCurrentScreen} />;
      case 'repository':
        return <PaperRepository setScreen={setCurrentScreen} />;
      case 'manage':
        return <ManagePapers setScreen={setCurrentScreen} />;
      case 'classes':
        return <ClassesScreen setScreen={setCurrentScreen} />;
      default:
        return <LoginScreen setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#131722] text-white justify-center">
      {/* Container for mobile-first views */}
      <div className="w-full h-full sm:max-w-md relative bg-[#131722] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden sm:border-x sm:border-[#2a3142]/30">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
