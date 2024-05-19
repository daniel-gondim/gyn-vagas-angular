import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CadastroVagasComponent } from "./cadastro-vagas/cadastro-vagas.component";
import { TabelaVagasComponent } from './tabela-vagas/tabela-vagas.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

    imports: [RouterOutlet,
      CadastroVagasComponent,
      TabelaVagasComponent,
      NavbarComponent,
      RouterLink,
      RouterLinkActive,
      HttpClientModule]
})
export class AppComponent {
  title = 'Gyn Vagas';
}
