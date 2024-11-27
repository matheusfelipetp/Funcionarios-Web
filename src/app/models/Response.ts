export interface Response<T> {
  dados: T;
  sucesso: boolean;
  mensagem: string;
}
