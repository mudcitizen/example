import { Component, Input, ApplicationRef } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info text-white p-2">
                The discount is {{discounter.discount}}
               </div>`
})

export class PaDiscountDisplayComponent {
    @Input("discounter")
    discounter: DiscountService;

    constructor(appRef:ApplicationRef){
        (<any>window).appRef = appRef;
        (<any>window).DiscountDisplayComponent = this;
    }

}