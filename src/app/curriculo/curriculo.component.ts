import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurriculoService, Curriculo } from './curriculo.service';  // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
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

  constructor(private curriculoService: CurriculoService) {}

  onSubmit() {
    // Lógica para manipular o envio do formulário
    console.log('Currículo salvo', this);
    
    const novoCurriculo: Curriculo = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      telefone: this.telefone,
      cep: this.cep,
      logradouro: this.logradouro,
      cidade: this.cidade,
      uf: this.uf,
      empresa: this.empresa,
      funcao: this.funcao,
      instituicaoDeEnsino: this.instituicaoDeEnsino,
      curso: this.curso,
      nivel: this.nivel
    };

    this.curriculoService.adicionarCurriculo(novoCurriculo).subscribe(
      (curriculo) => {
        console.log('Currículo adicionado', curriculo);
      },
      (error) => {
        console.error('Erro ao adicionar currículo', error);
      }
    );
  }
}
