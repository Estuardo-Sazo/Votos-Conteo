import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Candidato } from '../interfaces/candidato.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private api = environment.urlapi + 'candidatos/';

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.api);
  }
}
