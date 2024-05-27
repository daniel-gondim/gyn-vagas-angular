import { Routes } from '@angular/router';
import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { TabelaVagasComponent } from './tabela-vagas/tabela-vagas.component';
import { CurriculoComponent } from './curriculo/curriculo.component';

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
  }, // vírgula adicionada aqui
  {
    path: 'Curriculo',
    component: CurriculoComponent,
    title: 'Currículo' // Maiúsculo corrigido para consistência
  }
];

