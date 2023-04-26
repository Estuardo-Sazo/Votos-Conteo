import { Component } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatosService } from '../../services/candidatos.service';

@Component({
  selector: 'app-voto-candidato',
  templateUrl: './voto-candidato.component.html',
  styleUrls: ['./voto-candidato.component.scss'],
})
export class VotoCandidatoComponent {
  candidatos: Candidato[] = [];
  constructor(private candidatoService: CandidatosService) {}

  async ngOnInit() {
    await this.getCandidatos();
  }
  async getCandidatos() {
    this.candidatoService.getCandidatos().subscribe((data) => {
      console.log(data);
      this.candidatos = data;
    });
  }
}
