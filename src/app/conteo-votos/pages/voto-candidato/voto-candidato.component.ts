import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatosService } from '../../services/candidatos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voto-candidato',
  templateUrl: './voto-candidato.component.html',
  styleUrls: ['./voto-candidato.component.scss'],
})
export class VotoCandidatoComponent implements OnInit {
  candidatos: Candidato[] = [];
  upCan: Candidato[] = [];
  showModal = false;
  numeroVotos = 0;
  uuidSelect = '';
  uudiMesa;
  ingresoVoto = new FormGroup({
    numeroVotos: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  constructor(
    private candidatoService: CandidatosService,
    private router: ActivatedRoute
  ) {
    this.uudiMesa = this.router.snapshot.paramMap.get('mesa');
  }

  async ngOnInit() {
    await this.getCandidatos();
  }
  async getCandidatos() {
    this.candidatoService.getCandidatos().subscribe((data) => {
      this.candidatos = data;
    });
  }

  getCandidato(uuid: any) {
    this.showModal = !this.showModal;
    this.uuidSelect = uuid;
    console.log(uuid);
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  submit() {
    if (this.ingresoVoto.valid) {
      const numeroVotos: any = parseInt(this.ingresoVoto.value.numeroVotos!);

      this.candidatos.forEach((sub, index, objet) => {
        if (sub.id === this.uuidSelect) {
          objet[index].num_voto = numeroVotos;
        }
      });
      this.numeroVotos = 0;
      this.ingresoVoto.reset();
      this.closeModal();
    } else console.log('Hay datos inválidos en el formulario ');
  }
}
