import { Component, OnInit } from '@angular/core';
import { Candidato } from '../../interfaces/candidato.interface';
import { CandidatosService } from '../../services/candidatos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VotosService } from '../../services/votos.service';
import { SetVoto } from '../../interfaces/setVotos.interface';
import { NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MesasService } from '../../services/mesas.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-voto-candidato',
  templateUrl: './voto-candidato.component.html',
  styleUrls: ['./voto-candidato.component.scss'],
})
export class VotoCandidatoComponent implements OnInit {
  archivos: any = [];
  previsualizacion: string = '';
  loading: boolean = false;
  candidatos: Candidato[] = [];
  upCan: Candidato[] = [];

  set_voto: SetVoto = {};
  showModal = false;
  showAlert = false;
  numeroVotos = 0;
  uuidSelect = '';
  nameSelect = '';
  uudiMesa = '';
  setVoto = true;
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
    private routerPath: Router,
    private sanitizer: DomSanitizer,
    private mesaSvc: MesasService,
    private authService: AuthService
  ) {
    this.uudiMesa = this.router.snapshot.paramMap.get('mesa')!;
  }

  async ngOnInit() {
    await this.authService.validToken();
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
        this.setVoto = false;
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
      this.routerPath.navigate(['general']);
    }
    this.setVoto = true;
  }

  async sendData(data: SetVoto) {
    this.votosSvc.setVotos(data).subscribe((data) => {
      console.log(data);
    });
  }

  caturarFile(event: any): any {
    const file = event.target.files[0];
    this.extraerBase64(file).then((imagen: any) => {
      console.log(imagen);
      this.previsualizacion = imagen.base;
    });
    this.archivos.push(file);
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
        return null;
      } catch (e) {
        return null;
      }
    });

  /**
   * Limpiar imagen
   */

  clearImage(img = ''): any {
    this.previsualizacion = img;
    this.archivos = [];
  }

  /**
   * Subir archivo
   */

  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: any) => {
        console.log(archivo);

        formularioDeDatos.append('file', archivo, archivo.name);
      });
      // formularioDeDatos.append('_id', 'MY_ID_123')
      this.mesaSvc.uploadFile(formularioDeDatos).subscribe(
        (res) => {
          this.loading = false;

          console.log(res);
          this.clearImage(res.secureUrl);
        },
        (e) => {
          this.loading = false;
          console.log(e);
        }
      );
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }
}
