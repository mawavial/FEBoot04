import { render, fireEvent, screen } from '@testing-library/react';
import FormSimples from './FormSimples';


beforeAll(() => {
  global.alert = jest.fn(); // Mock window.alert
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore original implementation after tests
});

test('não dispara submit se onSubmit não for função', () => {
  render(<FormSimples onSubmit={undefined} />);
  fireEvent.click(screen.getByText('Enviar'));
});