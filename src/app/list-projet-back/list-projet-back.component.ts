import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'datatables.net';
import { HttpClient } from '@angular/common/http';
import { ProjetService } from '../serviceProjet';

@Component({
  selector: 'app-list-projet-back',
  templateUrl: './list-projet-back.component.html',
  styleUrls: ['./list-projet-back.component.css']
})
export class ListProjetBackComponent implements OnInit {
  projets: any[] = []; 
  constructor(private http: HttpClient, private projetService : ProjetService) {}

  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe(data => {
      this.projets = data;
    });
  }
}