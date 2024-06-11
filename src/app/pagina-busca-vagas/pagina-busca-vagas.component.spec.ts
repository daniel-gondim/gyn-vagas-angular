import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBuscaVagasComponent } from './pagina-busca-vagas.component';

describe('PaginaBuscaVagasComponent', () => {
  let component: PaginaBuscaVagasComponent;
  let fixture: ComponentFixture<PaginaBuscaVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBuscaVagasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaBuscaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
