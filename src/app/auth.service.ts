import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string = ''; 
  role: string = ''; 

  setCredentials(username: string, role: string) {
    this.username = username;
    this.role = role;
  }
}
