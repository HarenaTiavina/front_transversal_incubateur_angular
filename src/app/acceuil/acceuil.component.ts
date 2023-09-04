import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../serviceProjet';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  projets: any[] = []; 
  constructor(private http: HttpClient, private projetService : ProjetService) {}

  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe(data => {
      this.projets = data;
    });
  }
}
