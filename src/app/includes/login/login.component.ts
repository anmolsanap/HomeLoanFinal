import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  //   constructor(private formBuilder : FormBuilder, private router : Router){}

  //     loginForm :  FormGroup;

  // ngOnInit(): void {
  //     this.loginForm = this.formBuilder.group(
  //       {
  //         userName : ['',[Validators.required]],
  //         password : ['',[Validators.required]]
  //       }
  //     )
  // }
  // onLogin(){
  //     let un = this.loginForm.controls['userName'].value;
  //     let ps = this.loginForm.controls['password'].value;

  //     if(un=== 'admin' && ps === 'admin@123'){
  //       alert('Admin logged in')
  //       sessionStorage.setItem("userType", "admin");
  //         this.router.navigateByUrl('user-dashboard/admin');
  //     }
  //     else if(un === 're' && ps === 're@123'){
  //       alert("RE Logged in")
  //       sessionStorage.setItem("userType", "relation_executive");
  //       this.router.navigateByUrl('user-dashboard/relation_executive')
  //         }
  //         else if(un === 'oe' && ps === 'oe@123'){
  //           alert("RE Logged in")
  //           sessionStorage.setItem("userType", "relation_executive");
  //           this.router.navigateByUrl('user-dashboard/relation_executive')
  //       }
  //       else if(un === 'ah' && ps === 'ah@123'){
  //         alert("RE Logged in")
  //         sessionStorage.setItem("userType", "relation_executive");
  //         this.router.navigateByUrl('user-dashboard/relation_executive')
  //     }
  //     else if(un === 'cm' && ps === 'cm@123'){
  //       alert("RE Logged in")
  //       sessionStorage.setItem("userType", "relation_executive");
  //       this.router.navigateByUrl('user-dashboard/relation_executive')
  //   }
  // }

  constructor(private fb:FormBuilder ,private router:Router){}
  //loginform:FormGroup;
  loginForm :  FormGroup;
  ngOnInit(): void 
  {
    this.loginForm=this.fb.group(
      {
        userName:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )
  }
  

  onSubmit()
  {
    let un = this.loginForm.controls['userName'].value;
        let ps = this.loginForm.controls['password'].value;
  
        if(un=== 'admin' && ps === 'admin@123'){
          alert('Admin logged in')
          sessionStorage.setItem("userType", "admin");
            this.router.navigateByUrl('user-dashboard/admin');
        }
        else if(un === 're' && ps === 're@123'){
          alert("RE Logged in")
          sessionStorage.setItem("userType", "relation_executive");
          this.router.navigateByUrl('user-dashboard/relation_executive')
            }
            else if(un === 'oe' && ps === 'oe@123'){
              alert("RE Logged in")
              sessionStorage.setItem("userType", "relation_executive");
              this.router.navigateByUrl('user-dashboard/relation_executive')
          }
          else if(un === 'ah' && ps === 'ah@123'){
            alert("RE Logged in")
            sessionStorage.setItem("userType", "relation_executive");
            this.router.navigateByUrl('user-dashboard/relation_executive')
        }
        else if(un === 'cm' && ps === 'cm@123'){
          alert("RE Logged in")
          sessionStorage.setItem("userType", "relation_executive");
          this.router.navigateByUrl('user-dashboard/relation_executive')
        }
    else
    {
      alert('Enter valid authentication details...!')
    }
  }
}