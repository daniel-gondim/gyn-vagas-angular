import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
//Dados pessoais
nome: String ='';
Sobrenome: String = '';
email: String = '';
telefone: String = '';

 //Endereço-----------------------------------------------------------------------------------------
 Cep: String = '';
 Logradouro: String = '';
 Cidade: String = '';
 UF: String = '';
 

 //Experiências profissionais
  Empresa: String = '';
  Funcao: String = '';

  //Formação
  
  InstituicaodeEnsino: String = '';
  curso: String = '';
  Nível: String = '';

}
