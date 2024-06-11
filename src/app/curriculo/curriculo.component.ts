import { Component } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurriculoService, Curriculo } from './curriculo.service';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})

export class CurriculoComponent {
  form!: FormGroup;
  curriculo: Curriculo = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    cidade: '',
    uf: '',
    empresa: '',
    funcao: '',
    instituicaoDeEnsino: '',
    curso: '',
    nivel: ''
  };


  constructor(private curriculoService: CurriculoService) {}

  cadastrarCurriculo() {
    this.curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      response => {
        console.log('Curriculo cadastrado com sucesso:', response);
        // Navegar para próxima etapa ou finalizar cadastro
      },
      error => {
        console.error('Erro ao cadastrar curriculo:', error);
      }
    );
  }

  onSubmit() {
    this.cadastrarCurriculo();
  }
}
