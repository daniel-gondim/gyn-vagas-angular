import { Component } from '@angular/core';
import { ServicoVagaService, Vaga } from '../service/servico-vaga.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vagas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-vagas.component.html',
  styleUrl: './cadastro-vagas.component.css',
})
export class CadastroVagasComponent {
  nome = '';
  salario : any;
  descricao = '';
  empresa = '';
  contato = '';

  constructor(private vagaService: ServicoVagaService) {}

  adicionarVaga() {
    if (!this.nome || !this.descricao || !this.empresa || !this.contato || !this.salario) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    this.vagaService.adicionarVaga({
      nome: this.nome,
      salario: this.salario,
      descricao: this.descricao,
      empresa: this.empresa,
      contato: this.contato,
    });
    alert("Vaga adicionada com sucesso!")
    this.nome = "";
    this.descricao = "";
    this.contato = "";
    this.empresa = "";
    this.salario = "";
  }
}
