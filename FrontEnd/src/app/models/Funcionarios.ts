export interface Funcionario {
  id: number; // <- sem o "?"
  nome: string;
  sobrenome: string;
  departamento: string;
  ativo: boolean;
  turno: string;
  dataDeCriacao?: string;
  dataDeAlteracao?: string;
}