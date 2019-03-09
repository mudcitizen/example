import {
    Input, Output, EventEmitter, Directive,
    HostBinding, HostListener, SimpleChange, OnChanges
} from "@angular/core";

import {ApplicationRef} from "@angular/core";

@Directive({
    selector: "input[paModel]",
    exportAs: "paModel"
})
export class PaModel implements OnChanges  {

    direction:string;
    private _modelProperty : string;
    @Input("paModel")
    set modelProperty( value: string) {
        this._modelProperty = (value);
        console.log("modelProperty setter",this._modelProperty);
    }
    get modelProperty():string {return this._modelProperty;}

    @HostBinding("value")
    fieldValue: string = "";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).directive = this;
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes["modelProperty"].currentValue || "";
            this.direction = "Model";
        }
    }

    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element"
    }
}