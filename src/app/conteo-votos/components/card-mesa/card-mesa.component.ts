import { Component, Input, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';
import { Distrito } from '../../interfaces/distrito.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-mesa',
  templateUrl: './card-mesa.component.html',
  styleUrls: ['./card-mesa.component.scss'],
})
export class CardMesaComponent implements OnInit {
  @Input() mesa: Mesa = {
    distrito: {},
  };
  distrito: Distrito = {};
  constructor(private router: Router) {}
  ngOnInit() {
    this.distrito = this.mesa.distrito;
  }

  getMesa(uuid: any) {
    this.router.navigateByUrl('/voto-candidato/' + uuid);
  }
}
