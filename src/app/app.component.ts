import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroVagasComponent } from "./cadastro-vagas/cadastro-vagas.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CadastroVagasComponent]
})
export class AppComponent {
  title = 'gyn-vagas-angular';
}
