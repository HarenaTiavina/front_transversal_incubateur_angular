import { Component } from '@angular/core';
import { LoginService } from '../serviceLogin';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nom = '';
  mdp = '';
  erreurConnexion = false;

  constructor(private loginService: LoginService,private router: Router,private authService: AuthService) {}
  login(): void {
    console.log(this.nom);
    console.log(this.mdp);
    this.loginService.login(this.nom, this.mdp).subscribe(
      (response) => {
        console.log('Connexion réussie !', response);
        this.authService.setCredentials(this.nom, response.profil);
        console.log(this.authService.role);
        this.router.navigate(['/dashboard']);
        this.erreurConnexion = false;
      },
      (error) => {
        console.error('Échec de la connexion.', error);
        this.erreurConnexion = true;
      }
    );
  }
}