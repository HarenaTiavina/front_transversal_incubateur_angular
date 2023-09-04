import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService : AuthService,private router: Router) {}
  userId: number | null = null;

  ngOnInit(): void {
    const storedId = sessionStorage.getItem('id'); 
    if (storedId) {
      this.userId = +storedId; 
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

  logout(): void {
    this.authService.clearAuthentication();
    this.router.navigate(['/acceuil']);
  }
}
