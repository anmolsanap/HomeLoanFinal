import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { HeaderComponent } from './template/header/header.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { UserDashboardComponent } from './includes/user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { SideMenuComponent } from './includes/side-menu/side-menu.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { RegisterCustomerComponent } from './includes/register-customer/register-customer.component';
import { Router } from '@angular/router';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    HeaderComponent,
    LocationComponent,
    EnquiryComponent,
    LoginComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    SideMenuComponent,
    ContactUsComponent,
    EmiCalculatorComponent,
    RegisterCustomerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
