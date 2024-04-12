import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroVagasComponent } from "./cadastro-vagas/cadastro-vagas.component";
import { TabelaVagasComponent } from './tabela-vagas/tabela-vagas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CadastroVagasComponent, TabelaVagasComponent]
})
export class AppComponent {
  title = 'gyn-vagas-angular';
}
