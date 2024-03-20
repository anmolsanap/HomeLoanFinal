import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEnquiry } from '../model/user-enquiry';
import { Employee } from '../model/employee';




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

  insertAllEmployee(emp:Employee)
  {
    return this.http.post("http://laptop-enldsp8a:9092/employee",emp);
  }
  getEmployeeData()
  {
    return this.http.get("http://laptop-enldsp8a:9092/getemployee");
  }
  deleteemployee(employeeId:number)
  {
  return this.http.delete("http://laptop-enldsp8a:9092/deleteEmployee/"+employeeId);
  }
   
  updateemployee(employee:Employee)
  {
    return this.http.put("http://laptop-enldsp8a:9092/update/"+ employee.employeeId,employee);
  }
}
