import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaVagaComponent } from './edita-vaga.component';

describe('EditaVagaComponent', () => {
  let component: EditaVagaComponent;
  let fixture: ComponentFixture<EditaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
