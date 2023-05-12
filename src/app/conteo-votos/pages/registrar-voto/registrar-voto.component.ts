import { Component } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';
import { MesasService } from '../../services/mesas.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registrar-voto',
  templateUrl: './registrar-voto.component.html',
  styleUrls: ['./registrar-voto.component.scss'],
})
export class RegistrarVotoComponent {
  mesas: Mesa[] = [];

  constructor(
    private mesaService: MesasService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.validToken();
    await this.getMesas();
  }
  async getMesas() {
    
    this.mesaService.getMesas().subscribe((data) => {
      console.log(data);
      this.mesas = data;
    });
  }
}
