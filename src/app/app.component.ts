import {HttpClientModule} from "@angular/common/http";
import {Component} from '@angular/core';
import {CadastroVagasComponent} from "./cadastro-vagas/cadastro-vagas.component";
import {TabelaVagasComponent} from './tabela-vagas/tabela-vagas.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {RodapeComponent} from "./rodape/rodape.component";

import {MatFormFieldModule} from '@angular/material/form-field';
import {CurriculoComponent} from "./curriculo/curriculo.component";
import {ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HttpClientModule,
    NavbarComponent,
    RouterOutlet,
    CadastroVagasComponent,
    TabelaVagasComponent,
    RodapeComponent,
    ReactiveFormsModule,
    CurriculoComponent,
    MatFormFieldModule
  ]

})

export class AppComponent {
  title = 'Gyn Vagas';


}
