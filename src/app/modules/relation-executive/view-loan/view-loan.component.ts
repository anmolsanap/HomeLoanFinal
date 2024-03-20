import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Router } from '@angular/router';
import { Customer } from '../../../model/customer';
import { RelationExecutiveService } from '../../../services/relation-executive.service';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrl: './view-loan.component.css'
})
export class ViewLoanComponent implements OnInit{

    constructor(private enquiryService : RelationExecutiveService, private router : Router){}

    customerList : Customer[];

  

  ngOnInit(): void {
      this.enquiryService.getAllCustomerDetail().subscribe((data : Customer[])=>{
        this.customerList = data;
      })
  }
  
}
