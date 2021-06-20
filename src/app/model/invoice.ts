import { Operation } from "./operation";

export class Invoice {
    id: number;
    issueDate: Date;
    payment: Date;
    total: number;
    retention: number;
    currency: string;
    debtorRUC: number;
    debtorName: string;
    operation: Operation;

    constructor(){
        this.id = 0;
        this.issueDate = new Date();
        this.payment = new Date();
        this.total = 0;
        this.retention = 0;
        this.currency = "";
        this.debtorRUC = 0;
        this.debtorName = "";
        this.operation = new Operation();

    }
}
