import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Mesa } from '../interfaces/mesa.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  private api = environment.urlapi + 'mesas/';
  private apiFile = environment.urlapi + 'files/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMesas(): Observable<Mesa[]> {
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `bearer ${this.authService.token}`,
    });
    return this.http.get<Mesa[]>(this.api, { headers });
  }

  uploadFile(body: FormData): Observable<any> {
    return this.http.post(this.apiFile + 'actas', body);
  }
}
