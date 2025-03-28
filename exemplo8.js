async function carregarDados() { 
  try { 
      const resultado = await buscarDados(); 
      console.log(resultado); // Se der certo, imprime os dados 
  } catch (erro) { 
      console.error(erro); // Se der erro, captura aqui 
  } 
} 

carregarDados(); 
