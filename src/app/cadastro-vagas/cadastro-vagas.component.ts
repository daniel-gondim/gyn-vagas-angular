import {Component} from '@angular/core';
import {ServicoVagaService, Vaga} from '../service/servico-vaga.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cadastro-vagas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro-vagas.component.html',
  styleUrl: './cadastro-vagas.component.css',
})
export class CadastroVagasComponent {
  nome = '';
  salario: any;
  descricao = '';
  empresa = '';
  contato = '';
  vagas: Vaga[] = [];

  constructor(private vagaService: ServicoVagaService) {
  }

  ngOnInit(): void {
    this.vagaService.obterVagas().subscribe(
      (data: Vaga[]) => this.vagas = data,
      (error) => console.error('Erro ao obter vagas', error)
    );
  }

  adicionarVaga() {
    const vaga: Vaga = {
      nome: this.nome,
      salario: this.salario,
      descricao: this.descricao,
      empresa: this.empresa,
      contato: this.contato,
    };
    this.vagaService.adicionarVaga(vaga).subscribe(
      (response) => {
        alert('Vaga adicionada com sucesso!');
        this.resetForm();
      },
      (error) => {
        alert('Erro ao adicionar vaga.');
        console.error("Erro ao adicionar vaga", error);
      }
    );
  }

  private resetForm() {
    this.nome = '';
    this.salario = '';
    this.empresa = '';
    this.contato = '';
    this.descricao = '';
  }
}
