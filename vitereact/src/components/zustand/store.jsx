import { create } from 'zustand';

export const useContadorStore = create((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
  decrementar: () => set((state) => ({ contador: state.contador - 1 })),
  outra: 'vamo q vamo'

}));


export const useEntidades = create((set) => ({
  state: {
    contador: 0,
    outra: 'vamo q vamo',
    louco: 'Luciano Hulk'
  },
  actions: {
    setincrementar: () => set((state) => ({ contador: state.contador + 1 })),
    setDecrementar: () => set((state) => ({ contador: state.contador - 1 })),
    setUser: () => set((state) => ({ outra: state.outra + ' - ' + state.louco })),

  }
}));