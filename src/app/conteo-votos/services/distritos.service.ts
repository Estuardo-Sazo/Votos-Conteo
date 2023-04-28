import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Distrito } from '../interfaces/distrito.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private api = environment.urlapi + 'distritos/';

  constructor(private http: HttpClient) {}

  getDistitos(): Observable<Distrito[]> {
    return this.http.get<Distrito[]>(this.api);
  }
}
