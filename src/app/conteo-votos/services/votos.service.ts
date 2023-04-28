import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { SetVoto } from '../interfaces/setVotos.interface';

@Injectable({
  providedIn: 'root',
})
export class VotosService {
  private api = environment.urlapi + 'votos/';
  constructor(private http: HttpClient) {}

  setVotos(voto: SetVoto) {
    return this.http.post(this.api, voto);
  }
}
