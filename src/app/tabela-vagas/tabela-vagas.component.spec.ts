import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVagasComponent } from '../cadastro-vagas/cadastro-vagas.component'; 
import { TabelaVagasComponent } from './tabela-vagas.component';
import { ServicoVagaService, Vaga } from '../service/servico-vaga.service';

describe('CadastroVagasComponent', () => {
  let component: CadastroVagasComponent;
  let fixture: ComponentFixture<CadastroVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroVagasComponent, TabelaVagasComponent],
      providers: [ServicoVagaService], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display list of vagas', () => {
    const servicoVagaService = TestBed.inject(ServicoVagaService);
    const vagas: Vaga[] = [
      {
        nome: 'Vaga 1',
        salario: 1000,
        descricao: 'Descrição da vaga 1',
        empresa: 'Empresa 1',
        contato: 'Contato 1',
      },
      {
        nome: 'Vaga 2',
        salario: 2000,
        descricao: 'Descrição da vaga 2',
        empresa: 'Empresa 2',
        contato: 'Contato 2',
      },
    ];
    servicoVagaService.adicionarVaga(vagas[0]);
    servicoVagaService.adicionarVaga(vagas[1]);
    fixture.detectChanges();

    const listaVagasElement: HTMLElement =
      fixture.nativeElement.querySelector('.lista-vagas');
    expect(listaVagasElement).toBeTruthy();

    const listaItems: NodeListOf<HTMLLIElement> =
      listaVagasElement.querySelectorAll('li');
    expect(listaItems.length).toBe(2);
    expect(listaItems[0].textContent).toContain('Vaga 1');
    expect(listaItems[1].textContent).toContain('Vaga 2');
  });
});
