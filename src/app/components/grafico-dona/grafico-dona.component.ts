import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent {

  @Input('chart-labels') doughnutChartLabels: Label[] = [];
  
  @Input('chart-data') doughnutChartData: MultiDataSet = [];

  @Input('chart-leyend') doughnutChartTitle:string = '';

  protected doughnutChartType: ChartType = 'doughnut';

}
