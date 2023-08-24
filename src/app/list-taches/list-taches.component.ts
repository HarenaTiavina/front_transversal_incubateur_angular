import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements AfterViewInit {
  @ViewChild('dataTableTaches', { static: false }) table!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    $(this.table.nativeElement).DataTable();
  }
}