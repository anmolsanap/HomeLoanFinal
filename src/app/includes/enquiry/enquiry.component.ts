import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit{

  constructor(private formBuilder : FormBuilder, private enquiryService : EnquiryService, private router: Router){}
      enquiryForm : FormGroup;

  ngOnInit(): void {
     this.enquiryForm = this.formBuilder.group({
      enquiryName :[],
      email : [],
      panCard :[],
      mobileNo :[],
      address :[],
      gender : [],
  cibil:this.formBuilder.group({
    cibilId:[]
  })
      
     }) 
  }
  onSubmitEnquiry(){
   
    
      this.enquiryService.saveEnquiry(this.enquiryForm.value).subscribe();

      alert("You have registered successfully")

      this.router.navigateByUrl("/")
      window.location.reload();
  }

  onApproval(){

    alert("are you sure to apply for loan ? ");
    this.router.navigateByUrl("/HomeLoan/register-customer");
  }
}
