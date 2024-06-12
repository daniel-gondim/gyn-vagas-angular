import { Component, OnInit } from '@angular/core';
import { ServicoEmpresaService, Empresa } from '../service/servico-empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './perfil-empresa.component.html',
  styleUrl: './perfil-empresa.component.css'

})
export class PerfilEmpresaComponent implements OnInit {

  isEditingBenefits = false;
  editedBenefits: string = '';
  publishedBenefits: string[] = ['Vale transporte', 'Plano de saúde'];


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
      if (empresas.length > 0) {
        this.company = empresas[empresas.length - 1]; // Seleciona a empresa mais recente
        console.log('Empresa selecionada:', this.company); // Verifique os dados da empresa selecionada
      }
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

    // Função para iniciar a edição dos benefícios
    editBenefits() {
      this.editedBenefits = this.publishedBenefits.join('\n');
      this.isEditingBenefits = true;
    }

    // Função para salvar os benefícios editados
    saveBenefits() {
      this.publishedBenefits = this.editedBenefits.split('\n');
      this.isEditingBenefits = false;
    }

    // Função para publicar os benefícios editados
    publishBenefits() {
      this.saveBenefits(); // Salva benefícios antes de publicar
      // Lógica adicional para enviar os benefícios ao servidor, se necessário
    }
}
