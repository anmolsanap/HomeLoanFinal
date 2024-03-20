import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';


@NgModule({
  declarations: [
    CmDashboardComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule
  ]
})
export class CreditManagerModule { }
