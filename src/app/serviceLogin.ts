import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8082/api/login'; 

  constructor(private http: HttpClient) {}

  login(nom: string, mdp: string): Observable<any> {
    const body = {
      nom: nom,
      mdp: mdp,
    };

    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  logout(): Observable<any> {
    // Vous pouvez implémenter la déconnexion ici si nécessaire
    return this.http.get<any>(`${this.apiUrl}/logout`);
  }
}
