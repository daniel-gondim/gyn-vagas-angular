import {Component, OnInit} from '@angular/core';
import {ServicoVagaService, Vaga} from '../service/servico-vaga.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-tabela-vagas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tabela-vagas.component.html',
  styleUrl: './tabela-vagas.component.css'
})
export class TabelaVagasComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private servicoVagaService: ServicoVagaService) {
    console.log('ServicoVagaService injetado:', !!this.servicoVagaService);
  }

  ngOnInit() {
    this.obterVagas();
  }

  obterVagas(): void {
    this.servicoVagaService.obterVagas().subscribe(
      (data: Vaga[]) => {
        this.vagas = data;
        console.log("Vagas obtidas com sucesso:", this.vagas);
      },
      (error) => {
        console.error("Erro ao obter vagas:", error);
      }
    );
  }
}
