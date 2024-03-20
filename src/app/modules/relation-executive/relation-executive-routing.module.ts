import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { RegisterCustomerComponent } from '../../includes/register-customer/register-customer.component';

const routes: Routes = [
  {path : "feedback", component : FeedbackComponent},
  {path : "view-loan-applications", component : ViewLoanComponent},
  {path : "view-enquiry", component : ViewEnquiryComponent},
  {path : "customer-registration",component:RegisterCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationExecutiveRoutingModule { }
