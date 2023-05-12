import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Candidato } from '../interfaces/candidato.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private api = environment.urlapi + 'candidatos/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCandidatos(): Observable<Candidato[]> {
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `bearer ${this.authService.token}`,
    });
    return this.http.get<Candidato[]>(this.api,{ headers });
  }
}
