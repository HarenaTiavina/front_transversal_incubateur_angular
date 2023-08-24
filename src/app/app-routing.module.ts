import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardBackComponent } from './dashboard-back/dashboard-back.component';
import { ListProjetBackComponent } from './list-projet-back/list-projet-back.component';
import { ListEtapesComponent } from './list-etapes/list-etapes.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { DetailsTachesComponent } from './details-taches/details-taches.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'subscribe', component: InscriptionComponent }, 
  { path: 'dashboard', component: DashboardBackComponent }, 
  { path: 'list_projets_back', component: ListProjetBackComponent }, 
  { path: 'detailsProjet/:idProjet', component: ListEtapesComponent }, 
  { path: 'detailsEtapes/:idEtape', component: ListTachesComponent }, 
  { path: 'detailsTaches/:idTache', component: DetailsTachesComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
