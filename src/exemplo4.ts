
import { clone3 } from "./exemplo3";
import Contato from "./interfaces/Contato";

const dandara: Contato = {
    telefone: '123456789',
    email: 'danda23@pluver.com.br',
    mandarMensagem(mensagem: string) {
        console.log(`Mandando mensagem: ${mensagem}`);
    },
    receberMensagem: (id: number) => `Recebendo mensagem com id: ${id}`,
  }

const olavo: Contato = {
    telefone: '123456789',
    email: 'nurufraguinhoatacado99@hotmail.com',
    ligar: clone3,
    mandarMensagem(mensagem: string) {
        console.log(`Mandando mensagem: ${mensagem}`);
    },
    receberMensagem: (id: number) => `Recebendo mensagem com id: ${id}`,
}

console.log(olavo.ligar(dandara))