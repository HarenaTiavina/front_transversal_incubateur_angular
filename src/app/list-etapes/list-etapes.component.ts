import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-etapes',
  templateUrl: './list-etapes.component.html',
  styleUrls: ['./list-etapes.component.css']
})
export class ListEtapesComponent implements AfterViewInit {
  @ViewChild('dataTableEtapes', { static: false }) table!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    $(this.table.nativeElement).DataTable();
  }
}