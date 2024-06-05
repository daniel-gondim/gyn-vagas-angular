import {Routes} from '@angular/router';
import {CadastroVagasComponent} from './cadastro-vagas/cadastro-vagas.component';
import {TabelaVagasComponent} from './tabela-vagas/tabela-vagas.component';
import {PaginaHomeComponent} from './pagina-home/pagina-home.component';
import {EditaVagaComponent} from "./edita-vaga/edita-vaga.component";
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

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
    path: 'cadastro-de-empresa',
    component: CadastroEmpresaComponent,
    title: 'Cadastro de empresa'
  },

  {
    path: 'editar-vaga/:id',
    component: EditaVagaComponent,
    title: 'Edição de vaga'
  },

  {
    path: '',
    redirectTo: '/home', // Redireciona para /home se a rota estiver vazia
    pathMatch: 'full'
  },

  {
    path: '**', // Rota de fallback para página não encontrada
    redirectTo: '/home'
  }

];
