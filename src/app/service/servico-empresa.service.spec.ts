import { TestBed } from '@angular/core/testing';

import { ServicoEmpresaService } from './servico-empresa.service';

describe('ServicoEmpresaService', () => {
  let service: ServicoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
