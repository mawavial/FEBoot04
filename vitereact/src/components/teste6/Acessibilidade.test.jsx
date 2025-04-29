import { render, screen } from '@testing-library/react';
import { Acessibilidade } from './Acessibilidade';

test('encontra elementos usando roles e labels', () => {
  render(<Acessibilidade />);
  expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
});
