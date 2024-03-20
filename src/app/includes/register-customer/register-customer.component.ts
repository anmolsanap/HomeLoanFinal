
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RelationExecutiveService } from '../../services/relation-executive.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private reService: RelationExecutiveService) { }

  registerCustomer: FormGroup;
  adhar:any;
  pan:any;
  passbook:any;
  income:any;
  photo:any;
  imgSrc1:any;
  imgSrc2:any;
  imgSrc3:any;
  imgSrc4:any;
  imgSrc5:any;
  step: number = 1;
  url: any;
  reader=new FileReader();
  ngOnInit(): void {
    this.registerCustomer = this.formBuilder.group({
      customerId:[0],
      customerName: ['', Validators.required],
      address:['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required],
      bank: this.formBuilder.group({
        accountNo: ['', Validators.required],
        bankIFSC: ['', Validators.required],
        branchAddress: ['', Validators.required]
      }),
      document: this.formBuilder.group({
        documentId: [''],
        adharCard: [''],
        panCard: [''],
        bankPassbook: [''],
        incomeCertificate: [''],
        customerPhoto: ['']
      })
    });
  }

  onsubmit() {

    let cusJson:string=JSON.stringify(this.registerCustomer.value);
    const formData=new FormData();
    formData.append('customer',cusJson);
    formData.append('adhar',this.adhar);
    formData.append('pan',this.pan);
    formData.append('passbook',this.passbook);
    formData.append('income',this.income);
    formData.append('photo',this.photo);

    // Send the HTTP request to save the data
   this.reService.saveCustomerData(formData).subscribe()

    // Navigate to HomeLoan route
    this.router.navigateByUrl("/HomeLoan");
  }

  next() {
    this.step++;
  }

  previous() {
    this.step--;
  }

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  // onSelectCustPhoto(event:any)
  // {
  //   console.log(event);
  //   this.photo=event.target.files[0];
  //   this.reader.onload=e=>
  //   this.imgSrc1=this.reader.result;
  //   this.reader.readAsDataURL(this.photo)
  // }

  onSelectCustPhoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.registerCustomer.get('document.customerPhoto').setValue(reader.result);
        this.imgSrc1 = reader.result as string; // Display the image preview
      };
      reader.readAsDataURL(file);
    }
  }
  onSelectAdhar(event:any)
  {
    this.adhar=event.target.files[0];
    this.reader.onload=e=>
    this.imgSrc2=this.reader.result;
    this.reader.readAsDataURL(this.adhar)
  }
  onSelectPan(event:any)
  {
    this.pan=event.target.files[0];
    this.reader.onload=e=>
    this.imgSrc3=this.reader.result;
    this.reader.readAsDataURL(this.pan)
  }
  onSelectPassbook(event:any)
  {
    this.passbook=event.target.files[0];
    this.reader.onload=e=>
    this.imgSrc4=this.reader.result;
    this.reader.readAsDataURL(this.passbook)
  }
  onSelectIncome(event:any)
  {
    this.income=event.target.files[0];
    this.reader.onload=e=>
    this.imgSrc5=this.reader.result;
    this.reader.readAsDataURL(this.income)
  }
}