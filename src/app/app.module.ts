import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConteoVotosModule } from './conteo-votos/conteo-votos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/interceptor/spinner.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConteoVotosModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    NgApexchartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
