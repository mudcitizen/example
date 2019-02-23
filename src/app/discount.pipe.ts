import { Pipe, Injectable } from "@angular/core";
import { DiscountService } from "./discount.service";
import {LogService } from "./log.service";
@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe {
    constructor(private logger: LogService,private discount: DiscountService) { }
    transform(price: number): number {
        return this.discount.applyDiscount(price);
    }
}