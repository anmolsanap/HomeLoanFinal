import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class RelationExecutiveService {

  constructor(private http : HttpClient) { }


    saveAllEnquiryDetail(customer : Customer){
      return this.http.post("http://localhost:3000/re/", customer);
  }

  getAllCustomerDetail(){
    return this.http.get("http://localhost:3000/re");
  }
}
