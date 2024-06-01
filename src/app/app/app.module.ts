import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from "../app.component";
import {TabelaVagasComponent} from "../tabela-vagas/tabela-vagas.component";
import {CadastroVagasComponent} from "../cadastro-vagas/cadastro-vagas.component";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    CadastroVagasComponent,
    TabelaVagasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


