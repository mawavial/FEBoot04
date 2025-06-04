// Função utilitária para logar ações de usuário
export function logAction<T extends (...args: any[]) => any>(action: string, fn: T): T {
  return ((...args: any[]) => {
    console.log(`[LOG] Ação: ${action}`, { argumentos: args, data: new Date() });
    return fn(...args);
  }) as T;
}
