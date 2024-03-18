import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Router } from '@angular/router';
import { UserEnquiry } from '../../../model/user-enquiry';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit{

    constructor(private enquiryService : EnquiryService, private router : Router){}

    enquiryList : UserEnquiry[];
    

  ngOnInit(): void {
   
      this.enquiryService.getAllEnquiry(Observable).subscribe((enquiries : any)=>
      {
        this.enquiryList=enquiries;
      });
  }

 
checkCibilScore(userenquiry:UserEnquiry){
  this.enquiryService.updateCibilScore(userenquiry).subscribe();
    
      alert("cibil score fetch succesfully");

      window.location.reload();
    
}

}
