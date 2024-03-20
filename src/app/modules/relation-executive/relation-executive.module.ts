import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationExecutiveRoutingModule } from './relation-executive-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ApprovedEnquiryComponent } from './approved-enquiry/approved-enquiry.component';
import { RejectEnquiryComponent } from './reject-enquiry/reject-enquiry.component';


@NgModule({
  declarations: [
    FeedbackComponent,
    ViewLoanComponent,
    ViewEnquiryComponent,
    ApprovedEnquiryComponent,
    RejectEnquiryComponent,
  
   
  ],
  imports: [
    CommonModule,
    RelationExecutiveRoutingModule
  ]
})
export class RelationExecutiveModule { }
