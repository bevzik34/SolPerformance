import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: AccueilComponent }, // Route par défaut, accueil
  { path: 'about', component: AboutComponent }, // Route vers la page 'about'
  { path: 'contacts', component: ContactsComponent },
  { path: 'performances', component: PerformancesComponent }, // Route vers la page 'performances'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
