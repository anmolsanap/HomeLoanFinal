import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { HeaderComponent } from './template/header/header.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { RegisterCustomerComponent } from './includes/register-customer/register-customer.component';

const routes: Routes = [
  {path: "", redirectTo : "HomeLoan", pathMatch: "full"},
  {path : "HomeLoan", component : DashboardComponent, children:[
    {path : "about-us", component: AboutUsComponent},
    {path: "contact-us", component:ContactUsComponent},
    {path:"emi-calculator", component:EmiCalculatorComponent},
    {path:"location", component:LocationComponent},
    {path:"enquiry", component:EnquiryComponent},
    {path:"login", component:LoginComponent},
    {path : "register-customer" , component : RegisterCustomerComponent}
  ]},
  {path : 'user-dashboard', component : UserDashboardComponent, children:[
    {path : 'admin', loadChildren:()=> import('./modules/admin/admin.module').then(module=>module.AdminModule)},
    {path : 'relation_executive', loadChildren:()=>import('./modules/relation-executive/relation-executive.module')
                                .then(module=>module.RelationExecutiveModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
