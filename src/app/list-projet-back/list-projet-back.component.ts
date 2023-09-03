import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'datatables.net';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-projet-back',
  templateUrl: './list-projet-back.component.html',
  styleUrls: ['./list-projet-back.component.css']
})
export class ListProjetBackComponent implements OnInit {
  projets: any[] = []; 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8082/api/Projets').subscribe((data) => {
      this.projets = data;
    });
  }
}