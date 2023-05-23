import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';
import { SocketIoService } from '../../services/socket-io.service';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries | undefined;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart-result',
  templateUrl: './chart-result.component.html',
  styleUrls: ['./chart-result.component.scss'],
})
export class ChartResultComponent {
  @ViewChild('chart') chart: ChartComponent | undefined;
  @Input() chart_votos: number[] = [];
  @Input() chart_candidatos: string[] = [];
  @Input() chart_partidos: string[] = [];
  @Input() chart_color: string[] = [];

  chartOptions!: Partial<ChartOptions> | any;
  constructor(private socketScv: SocketIoService) {}
  async ngOnInit() {
    await this.setData();
    this.socketScv.getResults$().subscribe(async ({ message, data }) => {
      const promises: any = [];
      this.clearDataBar();
      data.forEach((c:any) => {
        this.chart_candidatos.push(c.nombre_candidato);
        this.chart_partidos.push(c.nombre_partido);
        this.chart_color.push(c.color);
        this.chart_votos.push(c.total_votos);
        promises.push(true);
        
      });
      await Promise.all(promises);
      await this.setData();
    });

    
  }
  clearDataBar(){
    this.chart_votos=[];
    this.chart_candidatos=[];
    this.chart_partidos=[];
    this.chart_color=[];
  }
  async setData(){
    this.chartOptions = {
      /* Votos */
      series: [
        {
          name: 'Votos',
          data: this.chart_votos,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart: any, w: any, e: any) {
            // console.log(chart, w, e)
          },
        },
      },
      /* Colores Partidos */
      colors: this.chart_color,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      /* Nombres Candidatos o Partidos */
      xaxis: {
        categories: this.chart_partidos,
        /* Colores Nmbre Partidos */
        labels: {
          style: {
            colors: this.chart_color,
            fontSize: '13px',
          },
        },
      },
    };
  }
}
