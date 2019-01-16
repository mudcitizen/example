// Import a few directives
import {
    Directive, Input, Output,
    EventEmitter,
    HostBinding, HostListener
} from "@angular/core";

import { Product } from "./product.model";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {

    @Input("pa-attr")
    @HostBinding("class")
    bgClass: string;

    @Input("pa-product")
    theProduct: Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostBinding("click")
    triggerCustomEvent() {
        this.click.emit(this.theProduct.category);
    }
}