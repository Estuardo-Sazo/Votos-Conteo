import { Component } from '@angular/core';
import { Voto } from '../../interfaces/voto.interface';
import { ResultadosService } from '../../services/resultados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distrito-resultados',
  templateUrl: './distrito-resultados.component.html',
  styleUrls: ['./distrito-resultados.component.scss'],
})
export class DistritoResultadosComponent {
  votos: Voto[] = [];
  uuidDistri = '';
  nameDistri = '';
  chart_votos: number[] = [];
  chart_candidatos: string[] = [];
  chart_partidos: string[] = [];
  chart_color: string[] = [];
  constructor(
    private resultService: ResultadosService,
    private router: ActivatedRoute
  ) {
    this.uuidDistri = this.router.snapshot.paramMap.get('distrito')!;
    this.nameDistri = this.router.snapshot.paramMap.get('name')!;
  }
  async ngOnInit() {
    await this.getResults();
  }

  async getResults() {
    const data = await this.resultService.getResultsDistri(this.uuidDistri).toPromise();
    this.votos = data ?? [];

    this.votos.forEach((c) => {
      
      this.chart_candidatos.push(c.nombre_candidato);
      this.chart_partidos.push(c.nombre_partido);
      this.chart_color.push(c.color);
      this.chart_votos.push(c.total_votos);
    });
  }
}
