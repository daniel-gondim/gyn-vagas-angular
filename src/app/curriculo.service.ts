import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private baseUrl = 'http://localhost:8080/curriculos';

  constructor(private http: HttpClient) { }

  // Método para enviar o currículo para o backend
  enviarCurriculo(curriculo: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, curriculo);
  }

  // Outros métodos para obter, atualizar, excluir currículos podem ser adicionados aqui conforme necessário
}
