import { Bank } from "./bank";
import { CustomerDocuments } from "./customer-documents";
import { LoanSanction } from "./loan-sanction";

export class Customer {

    customerId:number;
    customerName:string;
    address:string;
      mobileNo:number;
      email:string;
      username:string;
      password:string;
     bank : Bank;
     document : CustomerDocuments;

}
