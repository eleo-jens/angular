import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; // à ajouter
import { HomeComponent } from './home/home.component'; // à ajouter
import { FourofourComponent } from './shared/fourofour/fourofour.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // ajouter path et le component lié
  { path: 'about', component: AboutComponent },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'exo',
    loadChildren: () =>
      import('./exercices/exercices.module').then((m) => m.ExercicesModule),
  },

  { path: '**', component: FourofourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
