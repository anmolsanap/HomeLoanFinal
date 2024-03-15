import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEnquiry } from '../model/user-enquiry';



@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http : HttpClient) { }

  saveEnquiry(enquiry : UserEnquiry){
      return this.http.post("http://localhost:3000/enquiry/", enquiry);
  }

  getAllEnquiry(){
    return this.http.get("http://localhost:3000/enquiry/");
  }
 
}
