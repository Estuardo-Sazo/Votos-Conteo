import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './pages/general/general.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarVotoComponent } from './pages/registrar-voto/registrar-voto.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardMesaComponent } from './components/card-mesa/card-mesa.component';
import { VotoCandidatoComponent } from './pages/voto-candidato/voto-candidato.component';
import { CardCandidatoComponent } from './components/card-candidato/card-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { CardDistritoComponent } from './components/card-distrito/card-distrito.component';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { DistritoResultadosComponent } from './pages/distrito-resultados/distrito-resultados.component';
import { ChartResultComponent } from './components/chart-result/chart-result.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    GeneralComponent,
    MenuComponent,
    RegistrarVotoComponent,
    CardMesaComponent,
    VotoCandidatoComponent,
    CardCandidatoComponent,
    CardDistritoComponent,
    DistritosComponent,
    DistritoResultadosComponent,
    ChartResultComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    NgApexchartsModule
  ],
})
export class ConteoVotosModule {}
