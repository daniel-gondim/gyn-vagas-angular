import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Vaga {
  id: boolean;
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
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
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
}
