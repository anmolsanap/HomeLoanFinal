import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationExecutiveRoutingModule } from './operation-executive-routing.module';
import { ApproveEnquiryComponent } from './approve-enquiry/approve-enquiry.component';


@NgModule({
  declarations: [
    ApproveEnquiryComponent
  ],
  imports: [
    CommonModule,
    OperationExecutiveRoutingModule
  ]
})
export class OperationExecutiveModule { }
