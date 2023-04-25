import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConteoVotosModule } from './conteo-votos/conteo-votos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConteoVotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
