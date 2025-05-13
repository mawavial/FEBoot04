import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage por padrão
import { combineReducers } from 'redux';

import contadorReducer from './reducers/counter';
import postReducer from './reducers/post';

// Configuração da persistência
const persistConfig = {
  key: 'root', // chave para o storage
  storage,
  // Opcionalmente, você pode adicionar:
  // whitelist: ['contador'], // apenas persistir o contador
  // blacklist: ['posts'], // não persistir os posts
};

// Combinando reducers
const rootReducer = combineReducers({
  contador: contadorReducer,
  posts: postReducer,
});

// Criando o reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurando a store com o reducer persistido
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Criando o persistor
export const persistor = persistStore(store);