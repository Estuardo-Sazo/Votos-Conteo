import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponent } from './conteo-votos/pages/general/general.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'General', component: GeneralComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }