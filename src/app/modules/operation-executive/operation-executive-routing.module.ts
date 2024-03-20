import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveEnquiryComponent } from './approve-enquiry/approve-enquiry.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'Oe-Approved', pathMatch: 'full' 
  },
  {
    path:'Oe-Approved',component:ApproveEnquiryComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationExecutiveRoutingModule { }
