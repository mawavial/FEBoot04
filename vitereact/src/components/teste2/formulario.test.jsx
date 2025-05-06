import { render, screen, fireEvent } from '@testing-library/react';
import { Formulario } from './Formulario';


beforeAll(() => {
  global.alert = jest.fn(); // Mock window.alert
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore original implementation after tests
});

test('mostra erro se nome for curto', () => {
  render(<Formulario />);
  fireEvent.change(screen.getByPlaceholderText(/digite o nome/i), {
    target: { value: 'Jo' }
  });
  fireEvent.click(screen.getByText(/enviar/i));

  expect(screen.getByText(/nome muito curto/i)).toBeInTheDocument();
});

test('nao mostra erro se nome for válido', () => {
  render(<Formulario />);
  fireEvent.change(screen.getByPlaceholderText(/digite o nome/i), {
    target: { value: 'Joana' }
  });
  fireEvent.click(screen.getByText(/enviar/i));

  expect(screen.queryByText(/nome muito curto/i)).toBeNull();
});