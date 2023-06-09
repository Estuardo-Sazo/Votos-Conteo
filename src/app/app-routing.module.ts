import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponent } from './conteo-votos/pages/general/general.component';
import { RegistrarVotoComponent } from './conteo-votos/pages/registrar-voto/registrar-voto.component';
import { VotoCandidatoComponent } from './conteo-votos/pages/voto-candidato/voto-candidato.component';
import { DistritosComponent } from './conteo-votos/pages/distritos/distritos.component';
import { DistritoResultadosComponent } from './conteo-votos/pages/distrito-resultados/distrito-resultados.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-voto', component: RegistrarVotoComponent },
  { path: 'distritos', component: DistritosComponent },
  { path: 'voto-candidato/:mesa', component: VotoCandidatoComponent },
  { path: 'distrito-result/:distrito/:name', component: DistritoResultadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
