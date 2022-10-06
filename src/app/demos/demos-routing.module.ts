import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DemosComponent } from './demos.component';

const routes: Routes = [
  {
    // ici le path n'est pas path: 'demos' car il est déjà dans app.module il a été chargé
    path: '',
    component: DemosComponent,
    children: [
      { path: 'demo1', component: Demo1Component },
      { path: 'demo2', component: Demo2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
