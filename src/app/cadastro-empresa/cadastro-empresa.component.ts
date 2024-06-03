import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cadastro-empresa.component.html',
  styleUrl: './cadastro-empresa.component.css'
})
export class CadastroEmpresaComponent implements OnInit{

empresa: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nome = '';
  cnpj = '';
  endereco = '';
  telefone = '';
  empresa: Empresa[] = [];
  id: any;


  constructor(private empresaService: ServicoEmpresaService) {}

  adicionarEmpresa() {
    const novaEmpresa: Empresa = {
      nome: this.empresa,
      cnpj: this.cnpj,
      endereco: this.endereco,
      telefone: this.telefone
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
    this.empresa = '';
    this.cnpj = '';
    this.endereco = '';
    this.telefone = '';
  }



}
