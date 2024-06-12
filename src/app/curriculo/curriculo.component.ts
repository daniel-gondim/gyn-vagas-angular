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
    atividades: '',
    instituicaoDeEnsino: '',
    curso: '',
    nivel: ''
  };

  descricao: any;

  constructor(private curriculoService: CurriculoService) {}

  onSubmit() {
    this.cadastrarCurriculo();
  }

  cadastrarCurriculo() {
    this.curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      response => {
        console.log('Currículo cadastrado com sucesso:', response);
        this.gerarPDF();
      },
      error => {
        console.error('Erro ao cadastrar currículo:', error);
        alert('Erro ao cadastrar currículo. Tente novamente.');
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

    // Desestruturando o objeto curriculo
    const {
    nome, sobrenome, email, telefone,
      cep, logradouro, cidade, uf, empresa, funcao,
      atividades, instituicaoDeEnsino, curso, nivel
    } = this.curriculo;

    // Dados Pessoais
    doc.setFont('helvetica', 'bold');
    doc.text('Dados Pessoais', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Nome: ${nome}`, margin, y);
    y += lineHeight;
    doc.text(`Sobrenome: ${sobrenome}`, margin, y);
    y += lineHeight;
    doc.text(`Email: ${email}`, margin, y);
    y += lineHeight;
    doc.text(`Telefone: ${telefone}`, margin, y);
    y += lineHeight * 2;

    // Endereço
    doc.setFont('helvetica', 'bold');
    doc.text('Endereço', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`CEP: ${cep}`, margin, y);
    y += lineHeight;
    doc.text(`Logradouro: ${logradouro}`, margin, y);
    y += lineHeight;
    doc.text(`Cidade: ${cidade}`, margin, y);
    y += lineHeight;
    doc.text(`UF: ${uf}`, margin, y);
    y += lineHeight * 2;

    // Experiências Profissionais
    doc.setFont('helvetica', 'bold');
    doc.text('Experiências Profissionais', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Empresa: ${empresa}`, margin, y);
    y += lineHeight;
    doc.text(`Função: ${funcao}`, margin, y);
    y += lineHeight;
    doc.text(`Atividades: ${atividades}`, margin, y, { maxWidth: pageWidth - margin * 2 });
    y += lineHeight * 2;

    // Formação
    doc.setFont('helvetica', 'bold');
    doc.text('Formação', margin, y);
    y += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.text(`Instituição de Ensino: ${instituicaoDeEnsino}`, margin, y);
    y += lineHeight;
    doc.text(`Curso: ${curso}`, margin, y);
    y += lineHeight;
    doc.text(`Nível: ${nivel}`, margin, y);

    doc.save('curriculo.pdf');
  }
}
