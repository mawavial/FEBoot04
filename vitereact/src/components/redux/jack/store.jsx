// store.jsx
//a aplicacao tem que ter um store, o store é o lugar onde fica o estado global da aplicação
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});