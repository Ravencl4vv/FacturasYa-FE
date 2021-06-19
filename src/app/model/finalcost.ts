export class Finalcost {
    id: number;
    reason: string;
    expressedName: string;
    expressedValue: number;

    constructor(id: number, reason: string, expressedName: string, expressedValue: number){
        this.id = id;
        this.reason = reason;
        this.expressedName = expressedName;
        this.expressedValue = expressedValue;
    }

}
