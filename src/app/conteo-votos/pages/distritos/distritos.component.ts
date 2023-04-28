import { Component } from '@angular/core';
import { Distrito } from '../../interfaces/distrito.interface';
import { DistritosService } from '../../services/distritos.service';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.scss'],
})
export class DistritosComponent {
  distritos: Distrito[] = [];
  constructor(private distritoSvc: DistritosService) {}

  async ngOnInit() {
    await this.getDistritos();
  }
  async getDistritos() {
    this.distritoSvc.getDistitos().subscribe((data) => {
      console.log(data);
      this.distritos = data;
    });
  }
}
