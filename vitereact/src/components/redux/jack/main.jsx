import { Provider } from 'react-redux';
import { store } from './store';



// Provider é um componente que fornece o store para toda a aplicação a partir do componente App
<Provider store={store}>
  <App />
</Provider>