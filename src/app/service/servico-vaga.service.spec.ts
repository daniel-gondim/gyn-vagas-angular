import { TestBed } from '@angular/core/testing';

import { ServicoVagaService } from './servico-vaga.service';

describe('ServicoVagaService', () => {
  let service: ServicoVagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoVagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve adicionar uma vaga', () => {
    const vaga = { nome: 'Vaga 1', salario: 1000, descricao: 'Descrição da vaga 1', empresa: 'Empresa 1', contato: 'Contato 1' };

    service.adicionarVaga(vaga);
    const vagas = service.obterVagas();

    expect(vagas.length).toBe(1);
    expect(vagas[0]).toEqual(vaga);
  });
});
