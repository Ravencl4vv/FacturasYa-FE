import { Operation } from "./operation";

export class Rateterm {
    id: number;
    daysPerYear: number;
    rateTerm: number;
    effectiveRate: number;
    discountDate: Date;
    operation: Operation;

    constructor(){
        this.id = 0;
        this.daysPerYear = 0;
        this.rateTerm = 0;
        this.effectiveRate = 0;
        this.discountDate = new Date();
        this.operation = new Operation();

    }
}
