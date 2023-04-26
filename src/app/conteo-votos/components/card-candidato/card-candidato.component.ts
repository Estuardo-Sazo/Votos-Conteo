import { Component, Input } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';

@Component({
  selector: 'app-card-candidato',
  templateUrl: './card-candidato.component.html',
  styleUrls: ['./card-candidato.component.scss'],
})
export class CardCandidatoComponent {
  @Input() candidato: Candidato = {};
}
