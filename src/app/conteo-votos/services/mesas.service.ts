import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Mesa } from '../interfaces/mesa.interface';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  private api = environment.urlapi + 'mesas/';

  constructor(private http: HttpClient) {}

  getMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.api);
  }
}
