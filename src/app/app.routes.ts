import {Routes} from '@angular/router';
import {CadastroVagasComponent} from './cadastro-vagas/cadastro-vagas.component';
import {TabelaVagasComponent} from './tabela-vagas/tabela-vagas.component';
import {PaginaHomeComponent} from './pagina-home/pagina-home.component';
import {EditaVagaComponent} from "./edita-vaga/edita-vaga.component";

export const routes: Routes = [

  {
    path: 'cadastro-de-vagas',
    component: CadastroVagasComponent,
    title: 'Cadastro de Vagas'
  },

  {
    path: 'tabela-de-vagas',
    component: TabelaVagasComponent,
    title: 'Tabela de Vagas'
  },

  {
    path: 'home',
    component: PaginaHomeComponent,
    title: 'Home'
  },

  {
    path: 'editar-vaga/:id',
    component: EditaVagaComponent,
    title: 'Edição de vaga'
  }

];
