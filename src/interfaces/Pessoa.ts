import { Status } from "../enums/Status";
import { Idade } from "../types/Idade";
import { Sexo } from "../types/Sexo";
import Endereco from "./Endereco";

export default interface Pessoa {
    id:number
    nome?: string
    status: Status
    idade?: Idade
    altura?: number
    peso?: number
    dataNascimento?: Date
    profissao?: string
    sexo: Sexo
    getIdade:  () => Idade
    endereco?: Endereco
    telefone?: string
    email?: string
}