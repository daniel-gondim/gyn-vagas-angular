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
  salario = 0;
  descricao = '';
  empresa = '';
  contato = '';

  constructor(private vagaService: ServicoVagaService) {}

  adicionarVaga() {
    this.vagaService.adicionarVaga({
      nome: this.nome,
      salario: this.salario,
      descricao: this.descricao,
      empresa: this.empresa,
      contato: this.contato,
    });
  }
}
