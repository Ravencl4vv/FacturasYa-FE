export class Operation {
    id: number;
    operationDate: Date;
    totalAmount: number;
    tir: number;

    constructor(id: number, operationDate: Date, totalAmount: number, tir: number){
        this.id = id;
        this.operationDate = operationDate;
        this.totalAmount = totalAmount;
        this.tir = tir;

    }
}
