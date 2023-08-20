import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'subscribe', component: InscriptionComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
