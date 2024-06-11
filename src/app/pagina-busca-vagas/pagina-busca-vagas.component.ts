import {Component, OnInit} from '@angular/core';
import {ServicoVagaService, Vaga} from "../service/servico-vaga.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pagina-busca-vagas',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './pagina-busca-vagas.component.html',
  styleUrl: './pagina-busca-vagas.component.css'
})
export class PaginaBuscaVagasComponent implements OnInit {

  vagas: Vaga[] = [];
  vagasFiltradas: Vaga[] = [];
  termoBuscado: string = '';

  constructor(private vagasService: ServicoVagaService) {
  }

  ngOnInit() {
    this.vagasService.obterVagas().subscribe(vagas => {
      this.vagas = vagas;
      this.vagasFiltradas = vagas;
    })
  }

  filtrarVagas() {
    this.vagasFiltradas = this.vagasService.filtrarVagas(this.vagas, this.termoBuscado);
  }

}
