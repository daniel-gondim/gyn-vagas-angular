import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, curriculo).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao cadastrar curriculo:', error);
    return throwError('Ocorreu um erro ao processar a solicitação.');
  }
}
