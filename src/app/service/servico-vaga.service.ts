import { Injectable } from '@angular/core';

export interface Vaga {
  nome: string;
  descricao: string;
  empresa: string;
  contato: string;
  salario: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicoVagaService {
  private vagas: Vaga[] = [];

  constructor() {}

  adicionarVaga(vaga: Vaga) {
    if (!this.validarVaga(vaga)) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Vaga adicionada!');
    this.vagas.push(vaga);
  }

  obterVagas(): Vaga[] {
    return this.vagas;
  }

  private validarVaga(vaga: Vaga): boolean {
    return (
      !!vaga.nome &&
      !!vaga.descricao &&
      !!vaga.empresa &&
      !!vaga.contato &&
      !!vaga.salario
    );
  }
}
