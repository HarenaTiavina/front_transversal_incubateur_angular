import { Component } from '@angular/core';
import { ProjetService } from '../serviceProjet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  projet: any = {
    nom : '',
    objectif: '',
    capital: 0,
    cahierCharge: '',
    personne: { id: 1 },
  };


  constructor(private projetService : ProjetService,private router: Router) {}
  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.projet);
    this.projetService.ajouterProjet(this.projet).subscribe((resultat) => {
      console.log('Projet ajouté avec succès !', resultat);
    });
    this.router.navigate(['/listProjet']);
  }
}
