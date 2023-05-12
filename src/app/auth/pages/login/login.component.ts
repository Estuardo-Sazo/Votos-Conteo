import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmValid = false;
  messageError = 'Datos incompletos.';
  loginFrm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      //Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/),
    ]),
  });
  constructor(
    private authSvc: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit() {}
  async submit() {
    if (this.loginFrm.valid) {
      this.frmValid = false;
      const data = {
        user: this.loginFrm.value.user!,
        password: this.loginFrm.value.password!,
      };
      this.authSvc.login(data).subscribe(
        (resp) => {
          console.log(resp);
          if (resp.access_token) {
            this.localStorage.save('token', resp.access_token);
            this.localStorage.saveObjet('user', resp.user);
            this.router.navigate(['/registro-voto']);
          }
        },
        (error) => {
          console.log(error);
          this.frmValid = true;
          this.messageError = 'Datos incorrectos!';
        }
      );
    } else this.frmValid = true;
  }
}
