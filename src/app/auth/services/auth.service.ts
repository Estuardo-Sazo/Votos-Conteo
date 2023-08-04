import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Login, LoginResp } from '../interface/login.interface';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = '';
  private api = environment.urlapi + 'auth/';
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  login(body: Login): Observable<LoginResp> {
    return this.http.post<LoginResp>(this.api + 'login', body);
  }

  async validToken(): Promise<boolean> {
    await this.cargarTokenStorage();
    if (this.token == '') {
    }
    return new Promise<boolean>((resolve) => {
      const headers = new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `bearer ${this.token}`,
      });
      this.http.get(`${this.api}user-token/`, { headers }).subscribe(
        (resp: any) => {
          resolve(true);
        },
        (err) => {
          this.localStorage.delete('token');
          this.localStorage.delete('user');
          this.router.navigate(['/login']);
          resolve(false);
        }
      );
    });
  }

  async cargarTokenStorage() {
    this.token = this.localStorage.get('token');
  }
  
  logOut(){
    this.localStorage.delete('token');
    this.router.navigate(['/login']);

  }  
}
