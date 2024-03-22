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
});
