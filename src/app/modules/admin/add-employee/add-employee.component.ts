import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

constructor(private service:EnquiryService,private fb:FormBuilder){ }

employeeForm:FormGroup;
  ngOnInit(): void {
    this.employeeForm=this.fb.group(
      {
        employeeName:[],
        address:[],
        employeeEmail:[],
        employeeMobileNo:[],
        employeeDesignation:[],
        userName:[],
        passWord:[]
      }
    )
  }

  onSub()
  {
    this.service.insertAllEmployee(this.employeeForm.value).subscribe();
    alert("Data added..!")
  }

}
