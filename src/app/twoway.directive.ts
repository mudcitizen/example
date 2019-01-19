import {
    Input, Output, EventEmitter, Directive,
    HostBinding, HostListener, SimpleChange, OnChanges
} from "@angular/core";

import {ApplicationRef} from "@angular/core";

@Directive({
    selector: "input[paModel]"
})
export class PaModel implements OnChanges  {

    private _modelProperty : string;
    @Input("paModel")
    /* Template has the following
      <input [paModel]="newProduct.name" 
             (paModelChange)="newProduct.name=$event" />
    */
   // newProduct.name updates this.modelProperty
    set modelProperty( value: string) {
        this._modelProperty = (value);
        console.log("modelProperty setter",this._modelProperty);
    }
    get modelProperty():string {return this._modelProperty;}

    /* this.fieldValue updates template <input> value 
    [value]="fieldValue"
    */
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
        }
    }

    @Output("paModelChange")
    update = new EventEmitter<string>();

    // When the Host Element's (input) event occurs the updateValue() 
    // method is executed which fires the (paModelChange) method - which
    // updates newProduct.name
    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
    }
}