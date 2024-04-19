import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVagaComponent } from './pagina-vaga.component';

describe('PaginaVagaComponent', () => {
  let component: PaginaVagaComponent;
  let fixture: ComponentFixture<PaginaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaVagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente pagina-vagas', () => {
    expect(component).toBeTruthy();
  });
});
