import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent  {
//implements OnInit

  calculatorForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  loanAmount: number;
  loanTerm: number;
  interestRate: number = 7.5;
  emi: number | undefined;

  // ngOnInit(): void {
  //   this.calculatorForm = this.fb.group({
  //     loanAmount: [],
  //     loanTerm: [],
  //     interestRate: [],
  //   })
  // }

  calculateEMI() {
    const principal = this.loanAmount || 0;
    const monthlyInterestRate = (this.interestRate || 0) / 1200;
    const numberOfPayments = this.loanTerm || 0;

    this.emi =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  }

}
