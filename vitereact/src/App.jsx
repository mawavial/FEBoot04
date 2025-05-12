import React, { useState } from 'react';
import { useAtom } from 'jotai';
import ZustandComponent from './components/zustand/index';
import ReduxComponent from './components/redux/main';
import JotaiComponent from './components/jotai/index';
import Namer from './localState/states';
import { contadorAtom } from './components/jotai/index';

function App() {

  const [activeLibrary, setActiveLibrary] = useState('zustand');
  const [contador] = useAtom(contadorAtom);

  const renderActiveComponent = () => {
    switch (activeLibrary) {
      case 'zustand':
        return <ZustandComponent />;
      case 'redux':
        return <ReduxComponent />;
      case 'jotai':
        return <JotaiComponent />;
      case 'localState':
        return <Namer />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>State Management Libraries</h1>
      <h2>{contador}</h2>
      <div>
        <button onClick={() => setActiveLibrary('zustand')}>Zustand</button>
        <button onClick={() => setActiveLibrary('redux')}>Redux</button>
        <button onClick={() => setActiveLibrary('jotai')}>Jotai</button>
        <button onClick={() => setActiveLibrary('localState')}>Local State</button>
      </div>
      <div>
        <h2>{activeLibrary.charAt(0).toUpperCase() + activeLibrary.slice(1)}</h2>
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default App;