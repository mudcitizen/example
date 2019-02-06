import { Pipe } from "@angular/core";

@Pipe({
    name: "addTax"
})
export class PaAddTaxPipe {
    defaultRate: number = 10;
    transform(value: any, rate?: any): number {
        /*
        TS Type annotations are not known / enforced 
        by Angular @ run-time - so you need to coerce
        stuff to the proper type
        */
        let valueNumber = Number.parseFloat(value);
        let rateNumber = rate == undefined ?
            this.defaultRate : Number.parseInt(rate);
        return valueNumber + (valueNumber * (rateNumber / 100));
    }
}