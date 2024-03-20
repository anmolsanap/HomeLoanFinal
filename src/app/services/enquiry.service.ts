import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEnquiry } from '../model/user-enquiry';
<<<<<<< Updated upstream
import { Customer } from '../model/customer';
=======
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

>>>>>>> Stashed changes



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
<<<<<<< Updated upstream
 
=======

  getCibilApproveUserList(): Observable<UserEnquiry[]> {
    return this.http.get<UserEnquiry[]>("http://laptop-oku7dfk5:9000/getapproveddata");
>>>>>>> Stashed changes
}

getCibilRejectedUserList(): Observable<UserEnquiry[]> {
  return this.http.get<UserEnquiry[]>("http://laptop-oku7dfk5:9000/getRejectedUser");
}
}