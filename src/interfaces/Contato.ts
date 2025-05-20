export default interface Contato {
    telefone?: string
    email?: string
    mandarMensagem(mensagem: string): void
    receberMensagem(id: number): string
    ligar?<T>(src:T): T
}