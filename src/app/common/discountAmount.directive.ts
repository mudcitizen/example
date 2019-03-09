import {
    Directive, Input,
    SimpleChange, KeyValueDiffer, KeyValueDiffers,} from "@angular/core";
import { DiscountService } from "./discount.service";
@Directive({
    /* This selector means that an instance of this directive is instantiated
       on all <td> that have pa-price attribute
    */
    selector: "td[pa-price]",
    /* exportAs means the template can refer to the directive instance as 
      This selector means that an instance of this directive is instantiated
      discount - so it can do discount.discountAmount
    */
   exportAs: "discount"
})
export class PaDiscountAmountDirective {
    private differ: KeyValueDiffer<any, any>;
    
    @Input("pa-price")
    originalPrice: number;

    discountAmount: number;

    constructor(private keyValueDiffers: KeyValueDiffers,
        private discount: DiscountService) { }
    
    ngOnInit() {
        this.differ =
            this.keyValueDiffers.find(this.discount).create();
    }

    ngDoCheck() {
        if (this.differ.diff(this.discount) != null) {
            this.updateValue();
        }
    }
        
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    }
    
    private updateValue() {
        this.discountAmount = this.originalPrice
            - this.discount.applyDiscount(this.originalPrice);
    }
}