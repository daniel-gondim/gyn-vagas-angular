import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ServicoVagaService, Vaga} from "../service/servico-vaga.service";
import {NgIf} from "@angular/common";

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
export class EditaVagaComponent {
  @Input() vaga: Vaga | null = null;
  @Output() edicaoCancelada = new EventEmitter<void>();
  @Output() vagaEditada = new EventEmitter<Vaga>();

  constructor(private vagaService: ServicoVagaService) {
    console.log('EditaVagaComponent criado');
  }

  salvarEdicao(): void {
    console.log("Salvando edição da vaga:", this.vaga);
    if (this.vaga && this.vaga.id) {
      this.vagaService.editarVaga(this.vaga.id.toString(), this.vaga).subscribe(
        (vagaEditada) => {
          console.log("Vaga editada com sucesso:", vagaEditada);
          this.vagaEditada.emit(vagaEditada);
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
  }
}