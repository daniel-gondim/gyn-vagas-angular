import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {
  // Dados pessoais
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  telefone: string = '';

  // Endereço
  cep: string = '';
  logradouro: string = '';
  cidade: string = '';
  uf: string = '';

  // Experiências profissionais
  empresa: string = '';
  funcao: string = '';

  // Formação
  instituicaoDeEnsino: string = '';
  curso: string = '';
  nivel: string = '';

  onSubmit() {
    // Lógica para manipular o envio do formulário
    console.log('Currículo salvo', this);
  }
}
