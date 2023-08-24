import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-back',
  templateUrl: './dashboard-back.component.html',
  styleUrls: ['./dashboard-back.component.css']
})
export class DashboardBackComponent implements AfterViewInit {
  @ViewChild('areaChartCanvas', { static: true }) areaChartCanvas!: ElementRef;
  @ViewChild('pieChartCanvas', { static: true }) pieChartCanvas!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.createAreaChart();
    this.createPieChart();
  }

  createAreaChart() {
    const ctx: CanvasRenderingContext2D = this.areaChartCanvas.nativeElement.getContext('2d');

    const areaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 10],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            beginAtZero: true
          }
        }
      }
    });
  }

  createPieChart() {
    const ctx: CanvasRenderingContext2D = this.pieChartCanvas.nativeElement.getContext('2d');

    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'yellow']
        }]
      }
    });
  }
}
