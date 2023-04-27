import { Component } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatosService } from '../../services/candidatos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-voto-candidato',
  templateUrl: './voto-candidato.component.html',
  styleUrls: ['./voto-candidato.component.scss'],
})
export class VotoCandidatoComponent {
  candidatos: Candidato[] = [];
  showModal = false;
  numeroVotos = 0;
  ingresoVoto = new FormGroup({
    numeroVotos: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
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

  getCandidato(uuid: any) {
    this.showModal = !this.showModal;
    console.log(uuid);
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  submit() {
    if (this.ingresoVoto.valid)
    console.log(this.ingresoVoto.value);
    else console.log('Hay datos inválidos en el formulario ');
  }
}
