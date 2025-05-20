import { mateus } from "./Exemplo2";
import Pessoa from "./interfaces/Pessoa";

function clone(source: Pessoa): Pessoa { 
  return Object.assign({}, source); 
}

function clone2(source: Pessoa, func: (source: Pessoa) => Pessoa): Pessoa { 
  return func(source); 
}

// console.log(clone2(mateus, clone))

export function clone3<T>(source: T): T { 
  return { ...source }; 
}