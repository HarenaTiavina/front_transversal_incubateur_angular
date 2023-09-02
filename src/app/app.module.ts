import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateEtapesComponent } from './create-etapes/create-etapes.component';
import { CreateTachesComponent } from './create-taches/create-taches.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

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
    CreateProjectComponent,
    CreateEtapesComponent,
    CreateTachesComponent,
    ListEquipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
