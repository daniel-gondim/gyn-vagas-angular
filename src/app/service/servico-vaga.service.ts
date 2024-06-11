import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Vaga {
  id: string;
  nome: string;
  descricao: string;
  empresa: string;
  contato: string;
  salario: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicoVagaService {
  private apiUrl = 'http://localhost:8080/vagas';

  constructor(private http: HttpClient) {
    console.log('ServicoVagaService instanciado');
  }

  adicionarVaga(vaga: Vaga): Observable<Vaga> {
    if (!this.validarVaga(vaga)) {
      alert('Por favor, preencha todos os campos.');
      return new Observable(observer => {
        observer.error("Validação falhou!")
      });
    }

    console.log('Vaga adicionada!');
    return this.http.post<Vaga>(this.apiUrl, vaga);
  }

  obterVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  editarVaga(id: string, vaga: Vaga): Observable<Vaga> {
    return this.http.put<Vaga>(`${this.apiUrl}/${id}`, vaga);
  }

  deletarVaga(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {responseType: 'text' as 'json'});
  }

  private validarVaga(vaga: Vaga): boolean {
    return (
      !!vaga.nome &&
      !!vaga.descricao &&
      !!vaga.empresa &&
      !!vaga.contato &&
      !!vaga.salario
    );
  }

  filtrarVagas(vagas: Vaga[], termo: string): Vaga[] {
    if (!termo) {
      return vagas;
    }

    const lowerTermo = termo.toLowerCase();

    return vagas.filter(vaga =>
      vaga.nome.toLowerCase().includes(lowerTermo) ||
      vaga.descricao.toLowerCase().includes(lowerTermo) ||
      vaga.empresa.toLowerCase().includes(lowerTermo) ||
      vaga.contato.toLowerCase().includes(lowerTermo)
    );
  }

  obterVagaPorId(id: string): Observable<Vaga> {
    return this.http.get<Vaga>(`${this.apiUrl}/${id}`);
  }

}
