import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});
//Objetos que descrevem o que deve acontecer com o estado. Com o Redux Toolkit, você geralmente não os cria manualmente.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Reducer é uma função que recebe o estado atual e uma ação e retorna um novo estado. O Redux Toolkit fornece uma função createSlice que gera automaticamente os criadores de ações e o redutor para você.
export default counterSlice.reducer;