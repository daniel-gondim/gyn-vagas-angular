import {HttpClientModule} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {ServicoVagaService, Vaga} from '../service/servico-vaga.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cadastro-vagas',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cadastro-vagas.component.html',
  styleUrl: './cadastro-vagas.component.css',
})
export class CadastroVagasComponent {
  nome = '';
  salario: any;
  descricao = '';
  empresa = '';
  contato = '';
  vagas: Vaga[] = [];
  id: any;

  constructor(private vagaService: ServicoVagaService) {
    console.log('ServicoVagaService injetado:', !!this.vagaService);
  }

  adicionarVaga() {
    const vaga: Vaga = {
      id : this.id,
      nome: this.nome,
      salario: this.salario,
      descricao: this.descricao,
      empresa: this.empresa,
      contato: this.contato,
    };
    this.vagaService.adicionarVaga(vaga).subscribe(
      (response) => {
        alert('Vaga adicionada com sucesso!');
        this.resetForm();
      },
      (error) => {
        alert('Erro ao adicionar vaga.');
        console.error("Erro ao adicionar vaga", error);
      }
    );
  }

  private resetForm() {
    this.nome = '';
    this.salario = '';
    this.empresa = '';
    this.contato = '';
    this.descricao = '';
  }
}
