let x:number = 124
let y: Date
let z: boolean 
let b: string[]
let s: any = ''

b =  "Oi, senhor" as any

interface Pessoa {
    id:number
    nome?: string
    idade?: number
    altura?: number
    peso?: number
    dataNascimento?: Date
    profissao?: string
    sexo?: string
    getIdade?: () => number
}

let pessoa: Pessoa = {
    id: 1,
    nome: 'Mateus',
    idade: 24,
    altura: 1.80,
    peso: 80,
    dataNascimento: new Date('1999-01-01'),
    sexo: 'Masculino'

}