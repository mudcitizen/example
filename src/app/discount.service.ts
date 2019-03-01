import { Injectable,Inject } from "@angular/core";
import { LogService,LogLevel } from "./log.service";

@Injectable()
export class DiscountService {
    private discountValue: number = 10;
    
    constructor(private logger: LogService) {
        let level = this.logger.minimumLevel;
        console.log("DiscountService",logger.getObjectId(),level,LogLevel[level])
    }

    public get discount(): number {
        return this.discountValue;
    }
    public set discount(newValue: number) {
        this.discountValue = newValue || 0;
    }
    public applyDiscount(price: number) {
        this.logger.logDebugMessage(`Discount ${this.discount}`
        + ` applied to price: ${price}`);
        return Math.max(price - this.discountValue, 5);
    }
}
