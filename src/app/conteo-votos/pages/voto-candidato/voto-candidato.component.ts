import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatosService } from '../../services/candidatos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VotosService } from '../../services/votos.service';
import { SetVoto } from '../../interfaces/setVotos.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-voto-candidato',
  templateUrl: './voto-candidato.component.html',
  styleUrls: ['./voto-candidato.component.scss'],
})
export class VotoCandidatoComponent implements OnInit {
  candidatos: Candidato[] = [];
  upCan: Candidato[] = [];

  set_voto: SetVoto = {};
  showModal = false;
  showAlert = false;
  numeroVotos = 0;
  uuidSelect = '';
  nameSelect = '';
  uudiMesa = '';
  setVoto = false;
  ingresoVoto = new FormGroup({
    numeroVotos: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  constructor(
    private candidatoService: CandidatosService,
    private router: ActivatedRoute,
    private votosSvc: VotosService,
    private routerPath: Router
  ) {
    this.uudiMesa = this.router.snapshot.paramMap.get('mesa')!;
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

  getName(name: any) {
    this.nameSelect = name;
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  closeModalAlert() {
    this.showAlert = !this.showAlert;
  }

  openModalAlert() {
    this.showAlert = !this.showAlert;
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

  async confirData() {
    console.log('call SET');

    const promises: any = [];

    await this.candidatos.forEach(async (c) => {
      if (c.num_voto === 0) {
        this.showAlert = true;
        return;
      }
    });

    if (this.setVoto) {
      await this.candidatos.forEach(async (c) => {
        this.set_voto.numero_votos = c.num_voto;
        this.set_voto.candidatoId = c.id;
        this.set_voto.mesaId = this.uudiMesa;
        promises.push(this.sendData(this.set_voto));
      });
    }

    await Promise.all(promises);
    if (this.setVoto) {
      this.routerPath.navigate(['/registro-voto']).then(() => {
        window.location.reload();
      });
    }
  }

  async sendData(data: SetVoto) {
    this.votosSvc.setVotos(data).subscribe((data) => {
      console.log(data);
    });
  }
}
