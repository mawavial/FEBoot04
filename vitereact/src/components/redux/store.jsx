import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './reducers/counter';
import postReducer from './reducers/post';


export const store = configureStore({
  reducer: {
    contador: contadorReducer,
    posts: postReducer,
  },
});