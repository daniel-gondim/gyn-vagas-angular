import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurriculoService, Curriculo } from './curriculo.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {
  curriculo: Curriculo = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    cidade: '',
    uf: '',
    empresa: '',
    funcao: '',
    instituicaoDeEnsino: '',
    curso: '',
    nivel: ''
  };

  constructor(private curriculoService: CurriculoService) {}

  cadastrarCurriculo() {
    this.curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      response => {
        console.log('Currículo cadastrado com sucesso:', response);
        this.gerarPDF();
      },
      error => {
        console.error('Erro ao cadastrar currículo:', error);
      }
    );
  }

  gerarPDF() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const lineHeight = 10;
    let y = margin;

    doc.setFontSize(16);
    doc.text('Currículo', pageWidth / 2, y, { align: 'center' });
    y += lineHeight * 2;

    doc.setFontSize(12);

    // Dados Pessoais
    doc.setFont('helvetica', 'bold');
    doc.text('Dados Pessoais', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Nome: ${this.curriculo.nome}`, margin, y);
    y += lineHeight;
    doc.text(`Sobrenome: ${this.curriculo.sobrenome}`, margin, y);
    y += lineHeight;
    doc.text(`Email: ${this.curriculo.email}`, margin, y);
    y += lineHeight;
    doc.text(`Telefone: ${this.curriculo.telefone}`, margin, y);
    y += lineHeight * 2;

    // Endereço
    doc.setFont('helvetica', 'bold');
    doc.text('Endereço', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`CEP: ${this.curriculo.cep}`, margin, y);
    y += lineHeight;
    doc.text(`Logradouro: ${this.curriculo.logradouro}`, margin, y);
    y += lineHeight;
    doc.text(`Cidade: ${this.curriculo.cidade}`, margin, y);
    y += lineHeight;
    doc.text(`UF: ${this.curriculo.uf}`, margin, y);
    y += lineHeight * 2;

    // Experiências Profissionais
    doc.setFont('helvetica', 'bold');
    doc.text('Experiências Profissionais', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Empresa: ${this.curriculo.empresa}`, margin, y);
    y += lineHeight;
    doc.text(`Função: ${this.curriculo.funcao}`, margin, y);
    y += lineHeight * 2;

    // Formação
    doc.setFont('helvetica', 'bold');
    doc.text('Formação', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Instituição de Ensino: ${this.curriculo.instituicaoDeEnsino}`, margin, y);
    y += lineHeight;
    doc.text(`Curso: ${this.curriculo.curso}`, margin, y);
    y += lineHeight;
    doc.text(`Nível: ${this.curriculo.nivel}`, margin, y);

    doc.save('curriculo.pdf');
  }

  onSubmit() {
    this.cadastrarCurriculo();
  }
}
