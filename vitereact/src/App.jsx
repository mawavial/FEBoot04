import React, { useState } from 'react';
import { useAtom } from 'jotai';
import ReduxComponent from './components/redux/main';
import Namer from './localState/states';

function App() {

  const [activeLibrary, setActiveLibrary] = useState('redux');

  const renderActiveComponent = () => {
    switch (activeLibrary) {
      case 'redux':
        return <ReduxComponent />;
      case 'localState':
        return <Namer />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>State Management Libraries</h1>
      <h2>{"contador"}</h2>
      <div>
        <button onClick={() => setActiveLibrary('redux')}>Redux</button>
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