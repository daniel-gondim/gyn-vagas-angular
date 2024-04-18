  import { Routes } from '@angular/router';
  import {PaginaVagaComponent} from "./pagina-vaga/pagina-vaga.component";
  import {TabelaVagasComponent} from "./tabela-vagas/tabela-vagas.component";

  export const routes: Routes = [
    {
      path: 'pagina-vaga',
      component: PaginaVagaComponent,
      data: { title: "Cadastro de vagas"}
    },
    {
      path: 'lista-vagas',
      component: TabelaVagasComponent,
      data: { title: "Lista de vagas" }
    }
  ];
