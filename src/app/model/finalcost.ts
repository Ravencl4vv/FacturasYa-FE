import { Operation } from "./operation";

export class Finalcost {
    id: number;
    reason: string;
    expressedName: string;
    expressedValue: number;
    operation: Operation;

    constructor(){
        this.id = 0;
        this.reason = "";
        this.expressedName = "";
        this.expressedValue = 0;
        this.operation = new Operation();
    }

}
