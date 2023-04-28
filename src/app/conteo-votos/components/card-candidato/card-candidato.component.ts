import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';

@Component({
  selector: 'app-card-candidato',
  templateUrl: './card-candidato.component.html',
  styleUrls: ['./card-candidato.component.scss'],
})
export class CardCandidatoComponent {
  @Input() candidato: Candidato = {
  };
  @Output() uuid = new EventEmitter<string>();
  @Output() name_candi = new EventEmitter<string>();

  setUuid(value: any,name:any) {
    this.uuid.emit(value);
    this.name_candi.emit(name);
  }
}
