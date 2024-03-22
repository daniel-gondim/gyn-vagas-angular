import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasDestaqueComponent } from './vagas-destaque.component';

describe('VagasDestaqueComponent', () => {
  let component: VagasDestaqueComponent;
  let fixture: ComponentFixture<VagasDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasDestaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagasDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
