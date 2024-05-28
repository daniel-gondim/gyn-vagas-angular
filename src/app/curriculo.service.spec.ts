import { TestBed } from '@angular/core/testing';

import { CurriculoService } from './curriculo.service';
import { HttpClientJsonpModule } from '@angular/common/http';

describe('CurriculoService', () => {
  let service: CurriculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
