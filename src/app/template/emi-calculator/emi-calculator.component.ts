import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent {

  loanAmount: number;
  loanTerm: number;
  interestRate: number = 7.5;
  emi: number | undefined;

  calculateEMI() {
    const principal = this.loanAmount || 0;
    const monthlyInterestRate = (this.interestRate || 0) / 1200;
    const numberOfPayments = this.loanTerm || 0;

    this.emi =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  }

}
