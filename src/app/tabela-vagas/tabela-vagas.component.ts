import {Component, OnInit} from '@angular/core';
import {ServicoVagaService, Vaga} from '../service/servico-vaga.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {EditaVagaComponent} from "../edita-vaga/edita-vaga.component";
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabela-vagas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, EditaVagaComponent],
  templateUrl: './tabela-vagas.component.html',
  styleUrl: './tabela-vagas.component.css'
})
export class TabelaVagasComponent implements OnInit {
  vagas: Vaga[] = [];
  vagaSelecionada: Vaga | null = null;

  constructor(private servicoVagaService: ServicoVagaService, private router: Router) {
    console.log('ServicoVagaService injetado:', !!this.servicoVagaService);
  }

  ngOnInit() {
    this.obterVagas();
  }

  obterVagas(): void {
    this.servicoVagaService.obterVagas().subscribe(
      (data: Vaga[]) => {
        this.vagas = data;
        console.log("Vagas obtidas com sucesso:", this.vagas);
      },
      (error) => {
        console.error("Erro ao obter vagas:", error);
      }
    );
  }

  deletarVaga(vagaASerExcluida: Vaga) {
    this.servicoVagaService.deletarVaga(vagaASerExcluida.id).subscribe(
      () => {
        console.log(`Vaga ${vagaASerExcluida.nome} excluída com sucesso!`);
        this.obterVagas();
      },
      (error) => {
        console.error("Erro ao excluir vaga: ", error);
      }
    )
  }

  selecionarVaga(vaga: Vaga): void {
    this.vagaSelecionada = {...vaga}; // Clona a vaga selecionada para edição
    console.log("Vaga selecionada", this.vagaSelecionada);
    this.router.navigate(['/editar-vaga', this.vagaSelecionada.id]);
  }

  atualizarVaga(vagaEditada: Vaga): void {
    if (vagaEditada.id) {
      this.servicoVagaService.editarVaga(vagaEditada.id.toString(), vagaEditada).subscribe(
        (vagaAtualizada) => {
          const index = this.vagas.findIndex(v => v.id === vagaAtualizada.id);
          if (index !== -1) {
            this.vagas[index] = vagaAtualizada;
          }
          this.vagaSelecionada = null;
          alert('Vaga editada com sucesso!');
        },
        (error) => {
          console.error("Erro ao editar vaga:", error);
          alert('Erro ao editar vaga.');
        }
      );
    }
  }

  cancelarEdicao() {
    this.vagaSelecionada = null;
    console.log("Edição cancelada");
  }
}
