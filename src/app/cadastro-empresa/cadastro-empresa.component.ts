import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicoEmpresaService, Empresa } from '../service/servico-empresa.service';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cadastro-empresa.component.html',
  styleUrl: './cadastro-empresa.component.css'
})
export class CadastroEmpresaComponent {

  nomeEmpresa = '';
  cnpj = '';
  endereco = '';
  telefone = '';
  email = '';
  empresas: Empresa[] = [];
  id: any;


  constructor(private empresaService: ServicoEmpresaService) {}

  adicionarEmpresa() {
    const novaEmpresa: Empresa = {
      id: this.id,
      nome: this.nomeEmpresa,
      cnpj: this.cnpj,
      endereco: this.endereco,
      telefone: this.telefone,
      email: this.email,
      descricao: ''
    };

    this.empresaService.adicionarEmpresa(novaEmpresa).subscribe(
      (response) => {
        alert('Empresa adicionada com sucesso!');
        this.resetForm();
      },
      (error) => {
        alert('Erro ao adicionar empresa.');
        console.error('Erro ao adicionar empresa', error);
      }
    );
  }

  private resetForm() {
    this.nomeEmpresa = '';
    this.cnpj = '';
    this.endereco = '';
    this.telefone = '';
    this.email = '';
  }



}
