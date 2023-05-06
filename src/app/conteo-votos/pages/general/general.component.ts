import { Component } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Voto } from '../../interfaces/voto.interface';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  votos: Voto[] = [];
  chart_votos: number[] = [];
  chart_candidatos: string[] = [];
  chart_partidos: string[] = [];
  chart_color: string[] = [];
  constructor(private resultService: ResultadosService) {}

  async ngOnInit() {
    await this.getResults();
  }

  async getResults() {
    const data = await this.resultService.getResults().toPromise();
    console.log(data);
    
    this.votos = data ?? [];

    this.votos.forEach((c) => {
      
      this.chart_candidatos.push(c.nombre_candidato);
      this.chart_partidos.push(c.nombre_partido);
      this.chart_color.push(c.color);
      this.chart_votos.push(c.total_votos);
    });
  }
}
