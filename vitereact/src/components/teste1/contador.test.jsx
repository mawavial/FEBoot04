import { render, screen, fireEvent } from '@testing-library/react';
import {Contador} from './Contador';

test('renderiza com valor inicial', () => {
  render(<Contador />);
  expect(screen.getByText(/você clicou 0 vezes/i)).toBeInTheDocument();
});

test('incrementa ao clicar', () => {
  render(<Contador />);
  fireEvent.click(screen.getByText(/clique/i));
  expect(screen.getByText(/você clicou 1 vezes/i)).toBeInTheDocument();
});