import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Empresa {
  id: string;
  nome: string;
  descricao: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
  website?: string;
  logoUrl?: string;
  benefits?: string[];
  photos?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicoEmpresaService {
  private apiUrl = 'http://localhost:8080/empresas';

  constructor(private http: HttpClient) {}

  adicionarEmpresa(empresa: Empresa): Observable<Empresa> {
    if (!this.validarEmpresa(empresa)) {
      alert('Por favor, preencha todos os campos.');
      return new Observable(observer => {
        observer.error("Validação falhou!");
      });
    }
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  obterEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  editarEmpresa(id: string, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${id}`, empresa);
  }

  deletarEmpresa(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private validarEmpresa(empresa: Empresa): boolean {
    return (
      !!empresa.nome &&
      !!empresa.descricao &&
      !!empresa.cnpj &&
      !!empresa.endereco &&
      !!empresa.telefone &&
      !!empresa.email
    );
  }

  obterVagaPorId(id: string): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }
}
