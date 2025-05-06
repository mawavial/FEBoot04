import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Contador } from './Component';

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Componente Redux funcionando!</h2>
        <Contador />
      </div>
    </Provider>
  );
};

export default ReduxComponent;