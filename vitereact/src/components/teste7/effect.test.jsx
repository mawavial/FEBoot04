

jest.useFakeTimers();

test('relógio atualiza com o tempo', () => {
  const { getByText } = render(<Relogio />);
  const horaInicial = getByText(/\d{2}:\d{2}:\d{2}/).textContent;

  jest.advanceTimersByTime(1000);
  const horaNova = getByText(/\d{2}:\d{2}:\d{2}/).textContent;

  expect(horaNova).not.toBe(horaInicial);
});
