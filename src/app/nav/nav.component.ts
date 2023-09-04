import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService : AuthService) {}
  userId: number | null = null;

  ngOnInit(): void {
    const storedId = sessionStorage.getItem('id'); // Utilisez 'id' pour récupérer l'ID
    if (storedId) {
      this.userId = +storedId; // Convertissez la chaîne en nombre
    }
  }
  

  notConnected(): boolean {
    return this.authService.isLogged();
  }

  hasUserAccess(): boolean {
    return this.authService.getRole('USER');
  }

  hasAdminAccess(): boolean {
    return this.authService.getRole('ADMIN');
  }

  hasInvestAccess(): boolean {
    return this.authService.getRole('INVEST');
  }
}
