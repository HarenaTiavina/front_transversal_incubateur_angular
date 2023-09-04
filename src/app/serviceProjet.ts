import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  private apiUrl = 'http://localhost:8082/api'; 

  constructor(private http: HttpClient) {}

  getAllProjets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Projets`);
  }

  ajouterProjet(projet: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Projets`, projet);
  }
}
