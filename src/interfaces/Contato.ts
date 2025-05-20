export default interface Contato<T, S> {
    telefone?: string
    email?: string
    mandarMensagem(mensagem: string): void
    receberMensagem(id: number): string
    ligar?<T,S>(src:T): S
    modeloCelular: T
    pager: S 
}