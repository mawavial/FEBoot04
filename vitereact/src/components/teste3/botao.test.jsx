import { render } from '@testing-library/react';
import { Botao } from './Botao';

test('renderiza sem erros', () => {
  render(<Botao texto="Clique aqui" />)
});

test('renderiza texto passado por props', () => {
  const { getByText } = render(<Botao texto="Salvar" />);
  expect(getByText('Salvar')).toBeInTheDocument();
});
