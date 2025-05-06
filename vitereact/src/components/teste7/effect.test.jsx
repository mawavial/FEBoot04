import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { Effect } from './Effect';

jest.useFakeTimers();

test('relógio avança corretamente após 10 segundos', () => {
  const horarioInicial = new Date('2025-05-02T00:00:00');
  jest.setSystemTime(horarioInicial);

  const { queryByText } = render(<Effect />);
// console.log( screen.debug())

  
  const horaInicial = queryByText('12:00:00 AM')?.textContent;

  act(() => {
    jest.advanceTimersByTime(10000);
  });

  console.log( screen.debug())
  const horaNova = queryByText('12:00:10 AM')?.textContent;

  expect(horaNova).toBe('12:00:10 AM');

});

// test('relógio exibe valores consistentes após múltiplos avanços de tempo', () => {
//   const { queryByText } = render(<Effect />);
//   const horaInicial = queryByText('00:00:00')?.textContent;

//   jest.advanceTimersByTime(3000);
//   const horaApos3Segundos = queryByText('00:00:03')?.textContent;

//   jest.advanceTimersByTime(2000);
//   const horaApos5Segundos = queryByText('00:00:05')?.textContent;

//   expect(horaApos3Segundos).not.toBe(horaInicial);
//   expect(horaApos5Segundos).not.toBe(horaApos3Segundos);
// });

// test('relógio não exibe valores inválidos', () => {
//   const { queryByText } = render(<Effect />);
//   const hora = queryByText('00:00:00')?.textContent;

//   expect(hora).not.toMatch(/[^0-9:]/);
// });