export class Invoice {
    id: number;
    issueDate: Date;
    payment: Date;
    total: number;
    retention: number;
    currency: string;
    debtorRUC: number;
    debtorName: string;

    constructor(id: number, issueDate: Date, payment: Date, total: number,
        retention: number, currency: string, debtorRUC: number, debtorName: string){
        this.id = id;
        this.issueDate = issueDate;
        this.payment = payment;
        this.total = total;
        this.retention = retention;
        this.currency = currency;
        this.debtorRUC = debtorRUC;
        this.debtorName = debtorName;

    }
}
