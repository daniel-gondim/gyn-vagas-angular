import { TestBed } from '@angular/core/testing';

import { ServicoVagaService } from './servico-vaga.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ServicoVagaService', () => {
  let service: ServicoVagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServicoVagaService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });


  // it('deve adicionar uma vaga se todos os campos estiverem preenchidos', () => {
  //   const vaga = {
  //     nome: 'Vaga 1',
  //     salario: 1000,
  //     descricao: 'Descrição da vaga 1',
  //     empresa: 'Empresa 1',
  //     contato: 'Contato 1',
  //   };
  //
  //   service.adicionarVaga(vaga);
  //   const vagas = service.obterVagas();
  //
  //   expect(vagas.size).toBe(1);
  //   expect(vagas[0]).toEqual(vaga);
  // });

  it('deve emitir um alerta caso o usuário deixe o campo Nome em branco', () => {
    const alertSpy = spyOn(window, 'alert'); // Espionando a função de alerta global

    const vaga = {
      id: 'sdsadada045',
      nome: '',
      salario: 3000,
      descricao: 'Vaga 1',
      empresa: 'Empresa 1',
      contato: 'Contato 1',
    };

    service.adicionarVaga(vaga);

    // Verifica se o alerta foi chamado com a mensagem correta
    expect(window.alert).toHaveBeenCalledWith(
      'Por favor, preencha todos os campos.'
    );

    // Verifica se a vaga não foi adicionada
    expect(service.adicionarVaga).not.toContain(vaga);

    // Reinicia o espião para o próximo teste
    // window.alert.calls.reset();
  });
});
