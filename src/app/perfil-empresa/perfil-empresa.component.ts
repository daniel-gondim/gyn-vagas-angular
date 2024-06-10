import { Component, OnInit } from '@angular/core';
import { ServicoEmpresaService, Empresa } from '../service/servico-empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


interface Job {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  location: string;
  salary: string;
}

export interface Company {
  id: string;
  nomeEmpresa: string;
  descricao: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
}



@Component({
  selector: 'app-perfil-empresa',
  standalone: true,
  imports: [HttpClientModule, CommonModule  ],
  templateUrl: './perfil-empresa.component.html',
  styleUrl: './perfil-empresa.component.css'

})
export class PerfilEmpresaComponent implements OnInit {


  company?: Empresa;
  jobs: any[] = [];
  isCompanyInfoPopupOpen = false;
  isJobPopupOpen = false;
  selectedJob: any;

  constructor(private servicoEmpresa: ServicoEmpresaService) {}

  ngOnInit(): void {
    this.obterEmpresa();
    this.jobs = this.mockJobs(); // Substitua isso pela chamada ao serviço para obter as vagas reais
  }

  obterEmpresa(): void {
    this.servicoEmpresa.obterEmpresas().subscribe(empresas => {
      console.log('Empresas recebidas:', empresas); // Verifique os dados recebidos
      this.company = empresas[0]; // Assumindo que está buscando a primeira empresa na lista
      console.log('Empresa selecionada:', this.company); // Verifique os dados da empresa selecionada
    });
  }

  openCompanyInfoPopup(): void {
    this.isCompanyInfoPopupOpen = true;
  }

  closeCompanyInfoPopup(): void {
    this.isCompanyInfoPopupOpen = false;
  }

  openJobPopup(job: any): void {
    this.selectedJob = job;
    this.isJobPopupOpen = true;
  }

  closeJobPopup(): void {
    this.isJobPopupOpen = false;
  }

  editCompanyInfo(): void {
    // Navegação para a página de edição de empresa
  }

  editJob(job: any): void {
    // Navegação para a página de edição de vaga
  }

  mockJobs(): any[] {
    return [
      { title: 'Desenvolvedor Front-end', shortDescription: 'Trabalhe com tecnologias modernas.', description: 'Descrição completa da vaga', location: 'São Paulo', salary: 'R$ 5.000' },
      { title: 'Desenvolvedor Back-end', shortDescription: 'Foco em Node.js.', description: 'Descrição completa da vaga', location: 'Rio de Janeiro', salary: 'R$ 6.000' }
    ];
  }
}
