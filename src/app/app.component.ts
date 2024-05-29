import { Component, input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CadastroVagasComponent } from "./cadastro-vagas/cadastro-vagas.component";
import { TabelaVagasComponent } from './tabela-vagas/tabela-vagas.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

    imports: [RouterOutlet,
      CadastroVagasComponent,
      TabelaVagasComponent,
      NavbarComponent,
      HttpClientModule,
      RouterLink,
      RouterLinkActive, MatFormFieldModule, CurriculoComponent]
})

export class AppComponent {
  title = 'Gyn Vagas';
}
