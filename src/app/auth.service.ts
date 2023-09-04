import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id : string = '';
  username: string = ''; 
  role: string = ''; 

  storeAuthentication() {
    sessionStorage.setItem('id', this.id);
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('role', this.role);
  }

  clearAuthentication() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }

  setCredentials(username: string, role: string, id: number) {
    this.id = id.toString();
    this.username = username;
    this.role = role;
  }

  isLogged(): boolean {
    return !sessionStorage.getItem('role');
  }

  getRole(roleToCheck: string): boolean {
    return sessionStorage.getItem('role') === roleToCheck;
  }
}
