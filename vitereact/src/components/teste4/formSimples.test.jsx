import { render, fireEvent, screen } from '@testing-library/react';
import FormSimples from './FormSimples';

test('não dispara submit se onSubmit não for função', () => {
  render(<FormSimples onSubmit={null} />);
  fireEvent.click(screen.getByText('Enviar'));
});