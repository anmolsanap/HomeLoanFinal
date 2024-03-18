import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface EmiDetails {
  month: number;
  beginningBalance: number;
  emi: number;
  principle: number;
  interest: number;
  outstandingBalance: number;
}
@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent  {


  // calculatorForm: FormGroup;
  // constructor(private fb: FormBuilder) { }

  // loanAmount: number;
  // loanTerm: number;
  // interestRate: number = 7.5;
  // emi: number | undefined;


  // calculateEMI() {
  //   const principal = this.loanAmount || 0;
  //   const monthlyInterestRate = (this.interestRate || 0) / 1200;
  //   const numberOfPayments = this.loanTerm || 0;

  //   this.emi =
  //     (principal * monthlyInterestRate) /
  //     (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  // }

  itemPerPage =10;
  currentPage=1;
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emiAmount: number;
  emiDetails: EmiDetails[] = [];
  totalInterest: number;
  totalPayableAmount: number;

  constructor() { }
 
  calculateEMI() {
    const monthlyInterestRate = (this.interestRate / 100) / 12;
    const numberOfPayments = this.loanTenure;
    const principal = this.loanAmount;

    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    this.emiAmount = emi;
    this.totalInterest = (emi * numberOfPayments - principal);
    this.totalPayableAmount = (emi * numberOfPayments);
    
    this.calculateEmiDetails(principal, monthlyInterestRate, numberOfPayments);
    console.log(this.emiDetails.length)
    }

  calculateEmiDetails(principal: number, monthlyInterestRate: number, numberOfPayments: number) {
    let balance = principal;
    for (let month = 1; month <= numberOfPayments; month++) {
      const interest = balance * monthlyInterestRate;
      const principle = this.emiAmount - interest;
      balance = balance - principle;

      const emiDetail: EmiDetails = {
        month,
        beginningBalance: balance + principle,
        emi: this.emiAmount,
        principle,
        interest,
        outstandingBalance: balance
      };

      this.emiDetails.push(emiDetail);
      
    }
  }
  onReset()
  {
    window.location.reload();
  }
changePage(page:number)
{
  this.currentPage=page;
}

get paginatedData()
{
  const start=(this.currentPage-1)*(this.itemPerPage)
  const end=start+this.itemPerPage
  return this.emiDetails.slice(start,end)
  
}

}
