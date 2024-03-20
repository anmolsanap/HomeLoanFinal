import { Component,OnInit } from '@angular/core';
import { UserEnquiry } from '../../../model/user-enquiry';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-reject-enquiry',
  templateUrl: './reject-enquiry.component.html',
  styleUrl: './reject-enquiry.component.css'
})
export class RejectEnquiryComponent implements OnInit {

  rejectuser: UserEnquiry[] = [];

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.getCibilRejectedUserList();
  }

  getCibilRejectedUserList(): void {
    this.enquiryService.getCibilRejectedUserList().subscribe(
      (rejectedenquiry: UserEnquiry[]) => {
        this.rejectuser = rejectedenquiry;
      })
    }

}
