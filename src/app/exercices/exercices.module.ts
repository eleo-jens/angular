import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExercicesComponent,
    Exo1Component,
    Exo2Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule, 
    SharedModule,
  ]
})
export class ExercicesModule { }
