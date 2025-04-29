import { render, fireEvent, screen } from '@testing-library/react';
import {CampoNome} from './CampoNome';

test('atualiza o nome digitado', () => {
  render(<CampoNome />);
  const input = screen.getByPlaceholderText('Digite seu nome');
  fireEvent.change(input, { target: { value: 'Matheus' } });
  expect(screen.getByText('Olá, Matheus!')).toBeInTheDocument();
});
