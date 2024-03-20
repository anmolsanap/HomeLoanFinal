import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class RelationExecutiveService {

  constructor(private http : HttpClient) { }

  getAllCustomerDetail(){
    return this.http.get("http://laptop-enldsp8a:9092/getCustomerDetails");
  }
  saveCustomerData(formData:FormData)
  {
    return this.http.post('http://laptop-enldsp8a:9092/saveCustomerDetails',formData);
  }
}
