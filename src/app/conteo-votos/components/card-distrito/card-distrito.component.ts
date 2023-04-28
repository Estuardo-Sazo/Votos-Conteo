import { Component, Input } from '@angular/core';
import { Distrito } from '../../interfaces/distrito.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-distrito',
  templateUrl: './card-distrito.component.html',
  styleUrls: ['./card-distrito.component.scss'],
})
export class CardDistritoComponent {
  @Input() distrito: Distrito = {};
  constructor(private router: Router) {}

  getDistrito(uuid: any, name :any) {
    this.router.navigateByUrl('/distrito-result/' + uuid + '/' + name);
  }
}
