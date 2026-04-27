export type CondicaoEntrega = 'integra' | 'avaria';

export type FormData = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  bairroEntrega: string;
  quantidadeVolumes: string;
  observacao: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export type ResumoRegistrado = {
  responsavel: string;
  email: string;
  codigoPedido: string;
  bairroEntrega: string;
  quantidadeVolumes: string;
  observacao: string;
  condicao: CondicaoEntrega;
};