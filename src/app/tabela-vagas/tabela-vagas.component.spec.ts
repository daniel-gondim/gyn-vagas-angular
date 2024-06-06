import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaVagasComponent } from './tabela-vagas.component';
import { ServicoVagaService, Vaga } from '../service/servico-vaga.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TabelaVagasComponent', () => {
  let component: TabelaVagasComponent;
  let fixture: ComponentFixture<TabelaVagasComponent>;
  let servicoVagaService: ServicoVagaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [ServicoVagaService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaVagasComponent);
    component = fixture.componentInstance;
    servicoVagaService = TestBed.inject(ServicoVagaService);
    fixture.detectChanges();
  });

  it('deve mostrar lista de vagas quando elas forem adicionadas', () => {
    const vagas: Vaga[] = [
      {
        id: "sdasdasdasda",
        nome: 'Vaga 1',
        salario: 1000,
        descricao: 'Descrição da vaga 1',
        empresa: 'Empresa 1',
        contato: 'Contato 1',
      },
      {
        id: "sdasdasdasda",
        nome: 'Vaga 2',
        salario: 2000,
        descricao: 'Descrição da vaga 2',
        empresa: 'Empresa 2',
        contato: 'Contato 2',
      },
    ];
    vagas.forEach((vaga) => servicoVagaService.adicionarVaga(vaga));
    fixture.detectChanges();

    const listaVagasElement: HTMLElement =
      fixture.nativeElement.querySelector('.tabela-vagas');
    expect(listaVagasElement).toBeTruthy();

    const linhas: NodeListOf<HTMLTableRowElement> =
      listaVagasElement.querySelectorAll('tbody > tr');

    expect(linhas.length).toEqual(vagas.length);
    linhas.forEach((linha, index) => {
      const listaItems: NodeListOf<HTMLTableCellElement> =
        linha.querySelectorAll('td');
      expect(listaItems.length).toBeGreaterThan(0);
      expect(listaItems[0].textContent).toContain(vagas[index].nome);
      expect(listaItems[1].textContent).toContain(vagas[index].descricao);
      expect(listaItems[2].textContent).toContain(vagas[index].empresa);
      expect(listaItems[3].textContent).toContain(vagas[index].contato);
      expect(listaItems[4].textContent).toContain(`R$ ${vagas[index].salario}`);
    });
  });
});
