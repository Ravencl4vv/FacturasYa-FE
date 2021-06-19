export class Rateterm {
    id: number;
    daysPerYear: number;
    rateTerm: number;
    effectiveRate: number;
    discountDate: Date;

    constructor(id: number, daysPerYear: number, rateTerm: number, effectiveRate: number, discountDate: Date){
        this.id = id;
        this.daysPerYear = daysPerYear;
        this.rateTerm = rateTerm;
        this.effectiveRate = effectiveRate;
        this.discountDate = discountDate;

    }
}
