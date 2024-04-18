import {Injectable} from '@angular/core';

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

  constructor() {
  }

  adicionarVaga(vaga: Vaga): boolean {
    if (!this.validarVaga(vaga)) {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    console.log('Vaga adicionada!');
    this.vagas.push(vaga);
    return true;
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
