import { Component, Input } from '@angular/core';
import { Distrito } from '../../interfaces/distrito.interface';

@Component({
  selector: 'app-card-distrito',
  templateUrl: './card-distrito.component.html',
  styleUrls: ['./card-distrito.component.scss'],
})
export class CardDistritoComponent {
  @Input() distrito: Distrito = {};
}
