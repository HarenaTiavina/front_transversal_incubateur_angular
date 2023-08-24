import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';
import { ListProjetBackComponent } from './list-projet-back/list-projet-back.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { ListEtapesComponent } from './list-etapes/list-etapes.component';
import { DetailsTachesComponent } from './details-taches/details-taches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AcceuilComponent,
    LoginComponent,
    InscriptionComponent,
    DashboardBackComponent,
    ListProjetBackComponent,
    ListTachesComponent,
    ListEtapesComponent,
    DetailsTachesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
