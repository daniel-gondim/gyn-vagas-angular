import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curriculo {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cep: string;
  logradouro: string;
  cidade: string;
  uf: string;
  empresa: string;
  funcao: string;
  instituicaoDeEnsino: string;
  curso: string;
  nivel: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private apiUrl = 'http://localhost:8080/curriculos';

  constructor(private http: HttpClient) {
    console.log('CurriculoService instanciado');
  }

  adicionarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    if (!this.validarCurriculo(curriculo)) {
      alert('Por favor, preencha todos os campos.');
      return new Observable(observer => {
        observer.error("Validação falhou!")
      });
    }

    console.log('Currículo adicionado!');
    return this.http.post<Curriculo>(this.apiUrl, curriculo);
  }

  obterCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  editarCurriculo(id: string, curriculo: Curriculo): Observable<Curriculo> {
    return this.http.put<Curriculo>(`${this.apiUrl}/${id}`, curriculo);
  }

  deletarCurriculo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private validarCurriculo(curriculo: Curriculo): boolean {
    return (
      !!curriculo.nome &&
      !!curriculo.sobrenome &&
      !!curriculo.email &&
      !!curriculo.telefone &&
      !!curriculo.cep &&
      !!curriculo.logradouro &&
      !!curriculo.cidade &&
      !!curriculo.uf &&
      !!curriculo.empresa &&
      !!curriculo.funcao &&
      !!curriculo.instituicaoDeEnsino &&
      !!curriculo.curso &&
      !!curriculo.nivel
    );
  }
}
