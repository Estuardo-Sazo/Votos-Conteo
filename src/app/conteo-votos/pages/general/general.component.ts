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
  constructor(private resultService: ResultadosService) {}

  async ngOnInit() {
    await this.getResults();
  }

  async getResults() {
    this.resultService.getResults().subscribe((data) => {
      console.log(data);
      this.votos = data;
    });
  }
}
