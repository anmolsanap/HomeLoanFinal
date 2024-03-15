import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../../model/bank';
import { RelationExecutiveService } from '../../services/relation-executive.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.css'
})
export class RegisterCustomerComponent implements OnInit{

  constructor(private formBuilder : FormBuilder, private router : Router, private reService : RelationExecutiveService){}

    registerCustomer : FormGroup;
    step : number = 1;

  ngOnInit(): void {

      this.registerCustomer = this.formBuilder.group({

        customerId : ['', [Validators.required]],
        customerName : ['', [Validators.required]],
        address : ['', [Validators.required]],
        mobileNo : ['', [Validators.required]],
        email : ['', [Validators.required]],
        userName : ['', [Validators.required]],
        password : ['', [Validators.required]],
        gender : [],

        bank : this.formBuilder.group({
          bankName : [],
          bankIFSC: [],
          branchAddress : [],
          accountNo : [],

          document : this.formBuilder.group({
            documentId : [],
            adharCard : [],
            panCard : [],
            bankPassbook : [],
            incomeCertificate : [],
            customerPhoto : [],
          })
        })
      })
  }

  onsubmit(){
    
   this.reService.saveAllEnquiryDetail(this.registerCustomer.value).subscribe();

   this.router.navigateByUrl("/HomeLoan");
    window.location.reload();
  }
  onPrevious(){
    this.step = this.step -1;
  }

  onNext(){
    this.step = this.step + 1;
  }

  name = 'Angular 4';
  ph:any;
  ad:any;
  pn:any;
  bn:any;
  in:any;

  onSelectPhoto(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.ph = event.target.result;
      }
    }
  }

  onSelectAdharCard(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.ad = event.target.result;
      }
    }
  }

  onSelectPanCard(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.pn = event.target.result;
      }
    }
  }

  onSelectBankPassbook(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.bn = event.target.result;
      }
    }
  }

  onSelectIncomeCertificate(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.in = event.target.result;
      }
    }
  }
}
