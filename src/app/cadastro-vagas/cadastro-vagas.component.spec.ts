import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroVagasComponent } from './cadastro-vagas.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";

describe('CadastroVagasComponent', () => {
  let component: CadastroVagasComponent;
  let fixture: ComponentFixture<CadastroVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, HttpClientTestingModule, HttpClientModule],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente cadastro-vagas', () => {
    expect(component).toBeTruthy();
  });
});
