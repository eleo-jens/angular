import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { Exo1Component } from './components/exo1/exo1.component';


@NgModule({
  declarations: [
    ExercicesComponent,
    Exo1Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
