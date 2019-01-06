// Import a few directives
import { Directive, ElementRef, Attribute, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnInit {
    
    @Input("pa-attr")
    bgClass:string; 
    
    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.classList.add(this.bgClass || "bg-success",
            "text-white");
    }
}