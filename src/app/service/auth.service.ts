import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login'; // Substitua pela URL do seu endpoint de login

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
}
