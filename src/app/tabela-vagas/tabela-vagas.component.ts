import { Component, OnInit } from '@angular/core';
import { ServicoVagaService, Vaga } from '../service/servico-vaga.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-vagas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-vagas.component.html',
  styleUrl: './tabela-vagas.component.css'
})
export class TabelaVagasComponent implements OnInit{
  vagas: Vaga[] = [];

  constructor (private servicoVagaService: ServicoVagaService) {}

  ngOnInit() {
    this.vagas = this.servicoVagaService.obterVagas();
  }

}
