import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Router } from '@angular/router';
import { UserEnquiry } from '../../../model/user-enquiry';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-approve-enquiry',
  templateUrl: './approve-enquiry.component.html',
  styleUrl: './approve-enquiry.component.css'
})
export class ApproveEnquiryComponent implements OnInit {

  constructor(private enquiryservice:EnquiryService, private route:Router){ }

  userenquiry:UserEnquiry[];

  ngOnInit(): void {
    this.getApprovedUsers();
  }

  getApprovedUsers(): void {
    this.enquiryservice.getCibilApproveUserList().subscribe(
      (approvedenquiries: UserEnquiry[]) => {
        this.userenquiry = approvedenquiries;
      }
    )
  }
}
