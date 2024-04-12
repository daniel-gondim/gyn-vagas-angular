import { Injectable } from '@angular/core';

export interface Vaga {
  nome: string;
  descricao: string;
  empresa: string;
  contato: string;
  salario: number;
}

@Injectable({
  providedIn: 'root'
})

export class ServicoVagaService {
  private vagas: Vaga[] = [];

  constructor() { }

  adicionarVaga(vaga: Vaga) {
    console.log("Vaga adicionada!")
    this.vagas.push(vaga);
  }

  obterVagas(): Vaga[] {
    return this.vagas;
  }
}
