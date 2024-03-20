import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'c-dash', pathMatch: 'full' 
  },
  {
    path:'c-dash',component:CmDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
