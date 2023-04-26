import { Component } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-registrar-voto',
  templateUrl: './registrar-voto.component.html',
  styleUrls: ['./registrar-voto.component.scss'],
})
export class RegistrarVotoComponent {
  mesas: Mesa[] = [];

  constructor(private mesaService: MesasService) {}

  async ngOnInit() {
    await this.getMesas();
  }
  async getMesas() {
    this.mesaService.getMesas().subscribe((data) => {
      console.log(data);
      this.mesas = data;
    });
  }
}
