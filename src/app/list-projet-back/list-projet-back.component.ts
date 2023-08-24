import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'datatables.net';

@Component({
  selector: 'app-list-projet-back',
  templateUrl: './list-projet-back.component.html',
  styleUrls: ['./list-projet-back.component.css']
})
export class ListProjetBackComponent implements AfterViewInit {
  @ViewChild('dataTable', { static: false }) table!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    $(this.table.nativeElement).DataTable();
  }
}