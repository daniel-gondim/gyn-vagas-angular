import { Component } from '@angular/core';
import {CadastroVagasComponent} from "../cadastro-vagas/cadastro-vagas.component";
import {TabelaVagasComponent} from "../tabela-vagas/tabela-vagas.component";

@Component({
  selector: 'app-pagina-vaga',
  standalone: true,
  imports: [
    CadastroVagasComponent,
    TabelaVagasComponent
  ],
  templateUrl: './pagina-vaga.component.html',
  styleUrl: './pagina-vaga.component.css'
})
export class PaginaVagaComponent {

}
