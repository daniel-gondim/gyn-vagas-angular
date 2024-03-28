import { Component } from '@angular/core';
import { Vaga } from '../service/servico-vaga.service';
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
  private vagas: Vaga[] = [];
  nome: any;
  salario: any;
  descricao: any;
  empresa: any;
  contato: any;

  constructor() {}

  adicionarVaga() {
    throw new Error('Method not implemented.');
  }
}
