import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Router } from '@angular/router';
import { UserEnquiry } from '../../../model/user-enquiry';


@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit{

    constructor(private enquiryService : EnquiryService, private router : Router){}

    enquiryList : UserEnquiry[];
    cibilScore : number;

  ngOnInit(): void {
   
      this.enquiryService.getAllEnquiry().subscribe((enquiries : UserEnquiry[])=>
      {
        this.enquiryList=enquiries;
      });
  }

  checkCibilScore(enquiryId : number){
   alert("ckeck cibil score executed : ")
    var newData = [];

    var size = size || 700;
    var baseSize = 640;

    while( baseSize < size ) {
        baseSize++;
        newData.push( {
            "mk" : Math.floor( Math.random()*900 ) + 100 //3 digit
        } );
    }  
    
   this.cibilScore =Math.floor( Math.random()*900 ) + 100
    return this.cibilScore ;


  }

}
