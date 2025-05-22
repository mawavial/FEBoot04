const btn = document.getElementById('acaoBtn') as HTMLButtonElement;
const resultado = document.getElementById('resultado') as HTMLDivElement;

btn.addEventListener('click', () => {
  resultado.textContent = 'BOOM! 🎉';
});
