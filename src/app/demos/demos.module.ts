import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';

@NgModule({
  declarations: [DemosComponent, Demo1Component, Demo2Component, Demo3Component, Demo4Component],
  imports: [CommonModule, DemosRoutingModule, FormsModule],
})
export class DemosModule {}
