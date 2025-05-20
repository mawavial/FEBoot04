import Gente from "./interfaces/Gente";

let x = 124
let y: Date
let z: boolean 
let b: string[]
let s: any = ''
let u: unknown = 1

x = 'sdasdasda' as any 
b =  "Oi, senhor" as any


let gente: Gente = {
    id: 1,
}

let cidade: Townsville ={ 
    population: 100000,
    area: 200,
    mayor: "John Doe",
    founded: new Date("1900-01-01"),
    isCoastal: true
}