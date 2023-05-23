import { Component } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { Voto } from '../../interfaces/voto.interface';
import { ConnectionServiceService } from '../../services/connection-service.service';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environments';
import { SocketIoService } from '../../services/socket-io.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  private api = environment.urlapi;
  votingResults: any;
  votos: Voto[] = [];
  chart_votos: number[] = [];
  chart_candidatos: string[] = [];
  chart_partidos: string[] = [];
  chart_color: string[] = [];

  constructor(
    private resultService: ResultadosService,
    public connectionService: ConnectionServiceService,
    private socketScv: SocketIoService
  ) {}

  async ngOnInit() {
    await this.getResults();
    this.socketScv.getResults$().subscribe(({ message, data }) => {
      console.log(message);

      console.log(data);
      this.setData(data);
    });
  }

  async getResults() {
    const data = await this.resultService.getResults().toPromise();
    console.log(data);
    await this.setData(data);
  }
  async setData(data: any) {
    console.log('New Data:', data);
    
    this.votos = data ?? [];

    this.votos.forEach((c) => {
      this.chart_candidatos.push(c.nombre_candidato);
      this.chart_partidos.push(c.nombre_partido);
      this.chart_color.push(c.color);
      this.chart_votos.push(c.total_votos);
    });
  }
}
