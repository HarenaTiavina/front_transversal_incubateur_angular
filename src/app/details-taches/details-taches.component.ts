import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details-taches',
  templateUrl: './details-taches.component.html',
  styleUrls: ['./details-taches.component.css']
})
export class DetailsTachesComponent implements AfterViewInit {
  @ViewChild('dataTableDepensesTache', { static: false }) table!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    $(this.table.nativeElement).DataTable();
  }
}