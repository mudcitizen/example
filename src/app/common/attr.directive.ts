// Import a few directives
import {
    Directive, Input, Output,
    EventEmitter,
    HostBinding, HostListener
} from "@angular/core";

import { Product } from "../model/product.model";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {
    @Input("pa-attr")
    @HostBinding("class") // binds bgClass to Host Element's class property
    bgClass: string;

    @Input("pa-product")
    product: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostListener("click")  
    // triggerCustomEvent runs when the host element is clicked
    triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
}
}