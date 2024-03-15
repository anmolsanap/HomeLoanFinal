import { Bank } from "./bank";
import { CustomerDocuments } from "./customer-documents";
import { LoanSanction } from "./loan-sanction";

export class Customer {

      id;
      customerName;
      address;
      mobileNo
      email;
      userName;
      password;
     bank : Bank
     document : CustomerDocuments;
    loanSanction : LoanSanction;

}
