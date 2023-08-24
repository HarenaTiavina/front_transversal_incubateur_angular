declare module 'chart.js' {
    export interface ChartOptions {
      scales?: {
        x?: ChartScale;
        y?: ChartScale;
      };
    }
  
    export interface ChartScale {
      type?: string;
      position?: string;
      beginAtZero?: boolean;
    }
  
    export class Chart {
      constructor(ctx: CanvasRenderingContext2D, config: any);
    }
  }
  