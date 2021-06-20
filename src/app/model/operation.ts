import { User } from "./user";
import { Rateterm } from "./rateterm";

export class Operation {
    id: number;
    operationDate: Date;
    totalAmount: number;
    tir: number;
    user: User;
    rateTerm: Rateterm;

    constructor(){
        this.id = 0;
        this.operationDate = new Date();
        this.totalAmount = 0;
        this.tir = 0;
        this.user = new User();
        this.rateTerm = new Rateterm();

    }
}
