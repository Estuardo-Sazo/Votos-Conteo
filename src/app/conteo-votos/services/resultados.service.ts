import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Voto } from '../interfaces/voto.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private api = environment.urlapi + 'votos/';
  constructor(private http: HttpClient) {}

  getResults(): Observable<Voto[]> {
    return this.http.get<Voto[]>(this.api+'results');
  }
}
