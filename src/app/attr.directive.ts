// Import a few directives
import {
    Directive, ElementRef, Attribute, Input, Output,
    OnChanges, SimpleChange, EventEmitter
} from "@angular/core";

import { Product } from "./product.model";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnChanges {

    @Input("pa-attr")
    bgClass: string;

    @Input("pa-product")
    theProduct: Product;

    @Output("pa-category")
    /* Template binding target is (pa-category) 
       Attr does click.emit(<payload>)
       ie pa-category is the templates alias for the click
       property
    */
    click = new EventEmitter<string>();

    constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener("click", e => {
            if (this.theProduct != null) {
                this.click.emit(this.theProduct.category);
            }
        });
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
}