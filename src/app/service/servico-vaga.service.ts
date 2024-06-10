import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

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
  private apiUrl = 'http://localhost:8080/api/vagas';

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
    // // Obtenha o token de autenticação do seu serviço de autenticação
    // const authToken = this.AuthService.getAuthToken();
    //
    // // Adicione o token de autenticação no cabeçalho da requisição
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${authToken}`,
    //   }),
    // };
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

  obterVagaPorId(id: string): Observable<Vaga> {
    return this.http.get<Vaga>(`${this.apiUrl}/${id}`);
  }

}
