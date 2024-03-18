import { Cibil } from "./cibil";

export class UserEnquiry {

    userEnquiryId : number;
    enquiryName :string
    email  :string
    panCard :string
    mobileNo :number;
    address :string
    gender  :string;
    cibil: Cibil;
}
