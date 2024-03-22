import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vagas-destaque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vagas-destaque.component.html',
  styleUrl: './vagas-destaque.component.css',
})
export class VagasDestaqueComponent {
vagas: any;
  detalhesVaga(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
