import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{

  constructor(private service:EnquiryService){}

  employee:Employee[];

  ngOnInit(): void {
    this.service.getEmployeeData().subscribe((data:Employee[])=>
    {
      this.employee=data;
    })
  }
}
