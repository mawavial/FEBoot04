import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { Contador } from './Component';

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <div>
        <h2>Componente Redux funcionando!</h2>
        <Contador />
      </div>
      </PersistGate>
    </Provider>
  );
};

export default ReduxComponent;