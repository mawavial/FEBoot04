interface Contact { 
  id: number;
  name: string;
  birthdate: Date;
}

const contacts: any = 12312
 [
  { id: 1, name: "John Doe", birthdate: new Date("1990-01-01") },
  { id: 2, name: "Jane Smith", birthdate: new Date("1985-05-15") },
  { id: 3, name: "Alice Johnson", birthdate: new Date("1992-07-20") },
  { id: 4, name: "Bob Brown", birthdate: new Date("1988-11-30") },
]


console.log(contacts?.map( contact => contact.name))