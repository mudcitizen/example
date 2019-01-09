// Import a few directives
import { Directive, ElementRef, Attribute, Input, OnInit,OnChanges,SimpleChange } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective implements OnInit, OnChanges {
    
    @Input("pa-attr")
    bgClass:string; 
    
    constructor(private element: ElementRef,
        @Attribute("pa-attr-name") private attrName:String
        ) {}

    ngOnInit() {
        //console.log("ngOnInit",this.attrName);
        this.element.nativeElement.classList.add(this.bgClass || "bg-success",
            "text-white");
    }

    ngOnChanges(changes: {[property: string]: SimpleChange })
    {    
        let change = changes["bgClass"];
        console.log("ngOnChanges",this.attrName,JSON.stringify(change));
        let classList = this.element.nativeElement.classList;
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
}