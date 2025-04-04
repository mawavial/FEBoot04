//TDZ = Temporal Dead Zone

/*
  Tipo                              Hoisted?       Pode usar antes?       TDZ?
  -------------------------------------------------------------------------------
  var                               Sim            Sim (como undefined)   Não
  let/const                         Sim            Não                    Sim
  function                          Sim            Sim                    Não
  function expression               Sim            Não                    Sim
  (const f = () => {}) 
*/



function exemplo() {
  console.log(x); // undefined
  var x = 5;

  if (true) {
    var x = 10;
    console.log(x); // 10
  }

  console.log(x); // 10 - var ignora escopo de bloco!
}
