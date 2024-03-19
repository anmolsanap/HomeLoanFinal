import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { Employee } from '../../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{

  constructor(private service:EnquiryService,private router:Router){}

  employee:Employee[];

  ngOnInit(): void {
    this.service.getEmployeeData().subscribe((data:Employee[])=>
    {
      this.employee=data;
    })
  }

  onDelete(employeeId:number)
  {
     this.service.deleteemployee(employeeId).subscribe();
     window.location.reload();
  }


    
  onupdate(e: Employee) {
    this.service.updateemployee(e).subscribe(() => {
      console.log('Update successful');
      // Patch the values and navigate to the desired route
      this.router.navigateByUrl('user-dashboard/admin/add-employee');
    },
    error => {
      console.log('Update error', error);
    });
  }
  
  
}
