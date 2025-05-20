import Pessoa from "./interfaces/Pessoa";

function clone(source: Pessoa): Pessoa { 
  return Object.assign({}, source); 
}

function clone2(source: Pessoa, func: (source: Pessoa) => Pessoa): Pessoa { 
  return func(source); 
}

export function clone3<T>(source: T): T { 
  return { ...source }; 
}