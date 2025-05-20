import { Status } from "./enums/Status";
import Pessoa from "./interfaces/Pessoa";
import { Idade } from "./types/Idade";


export const mateus: Pessoa = {
  id: 1,
  nome: 'Mateus',
  idade: 35,
  altura: 1.68,
  peso: 80,
  dataNascimento: new Date('1989-01-01'),
  sexo: "Masculino",
  status: Status.Ativo,
  endereco: {
    cidade: 'Petropolis',
    estado: 'RJ',
    cep: '12345-678'
  },
  telefone: '2345678',
  email: 'email',
  getIdade: function (): Idade {
    throw new Error("Function not implemented.");
  },

}