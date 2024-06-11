import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ServicoVagaService, Vaga} from "../service/servico-vaga.service";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edita-vaga',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './edita-vaga.component.html',
  styleUrl: './edita-vaga.component.css'
})
export class EditaVagaComponent implements OnInit {
  @Input() vaga: Vaga | null = null;
  @Output() edicaoCancelada = new EventEmitter<void>();
  @Output() vagaEditada = new EventEmitter<Vaga>();

  constructor(private vagaService: ServicoVagaService, private route: ActivatedRoute, private router: Router) {
    console.log('EditaVagaComponent criado');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vagaService.obterVagaPorId(id).subscribe(
        (vaga) => {
          this.vaga = vaga;
          console.log('Vaga carregada:', this.vaga);
        },
        (error) => {
          console.log('Erro ao carregar vaga:', error);
        }
      );
    }
  }

  salvarEdicao(): void {
    console.log("Salvando edição da vaga:", this.vaga);
    if (this.vaga) {
      this.vagaService.editarVaga(this.vaga.id.toString(), this.vaga).subscribe(
        (vagaEditada) => {
          console.log("Vaga editada com sucesso:", vagaEditada);
          this.vagaEditada.emit(vagaEditada);
          this.router.navigate(['/tabela-de-vagas']);
        },
        (error) => {
          alert('Erro ao editar vaga.');
          console.log('Erro ao editar vaga', error)
        }
      )
    }
  }

  cancelarEdicao() {
    console.log("Edição cancelada");
    this.edicaoCancelada.emit();
    this.router.navigate(['/tabela-de-vagas']);
  }
}
