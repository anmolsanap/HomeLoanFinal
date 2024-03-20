import { Component,OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Observable } from 'rxjs';
import { UserEnquiry } from '../../../model/user-enquiry';
import { Cibil } from '../../../model/cibil';

@Component({
  selector: 'app-cm-dashboard',
  templateUrl: './cm-dashboard.component.html',
  styleUrl: './cm-dashboard.component.css'
})
export class CmDashboardComponent implements OnInit {

  userEnquiries: any[] = [];
  userEnquiryCount: number = 0;
  approvedCount: number = 0;
  rejectedCount: number = 0;


  constructor(private userEnquiryService: EnquiryService) { }

  ngOnInit(): void {
    this.getUserEnquiries();
  }

  getUserEnquiries() {
    this.userEnquiryService.getAllEnquiry(Observable).subscribe(
      (response: any[]) => {
        this.userEnquiries = response;
        this.userEnquiryCount = this.userEnquiries.length;
        console.log('User Enquiry Count:', this.userEnquiryCount);
        if (this.userEnquiries && this.userEnquiries.length > 0) {
          // Count approved statuses
          this.approvedCount = this.userEnquiries.filter(enquiry => enquiry.cibil && enquiry.cibil.cibilStatus === 'Approved').length;
          
          // Count rejected statuses
          this.rejectedCount = this.userEnquiries.filter(enquiry => enquiry.cibil && enquiry.cibil.cibilStatus === 'Rejected').length;
      
      }
    }
    )
    }

}
