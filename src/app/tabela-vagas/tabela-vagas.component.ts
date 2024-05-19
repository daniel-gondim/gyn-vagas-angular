import {Component, OnInit} from '@angular/core';
import {ServicoVagaService, Vaga} from '../service/servico-vaga.service';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-tabela-vagas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-vagas.component.html',
  styleUrl: './tabela-vagas.component.css'
})
export class TabelaVagasComponent implements OnInit {
  vagas: Vaga[] = [];

  constructor(private servicoVagaService: ServicoVagaService) {
  }

  ngOnInit() {
    this.servicoVagaService.obterVagas().subscribe(
      (data: Vaga[]) => this.vagas = data,
      (error) => console.error(error)
    );
    console.log("Obtendo vagas")
  }

}
