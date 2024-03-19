import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEnquiry } from '../model/user-enquiry';
import { Customer } from '../model/customer';



@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http : HttpClient) { }

  saveEnquiry(enquiry : UserEnquiry){
      return this.http.post("http://laptop-enldsp8a:9000/saveenquiry", enquiry);
  }

  getAllEnquiry(Observer){
    return this.http.get("http://laptop-enldsp8a:9000/getuserenquiry");
  }
  updateCibilScore(cibil:UserEnquiry) {
    return this.http.put("http://laptop-enldsp8a:9000/updateCibil/" +cibil.userEnquiryId,cibil);
  }
 
}
