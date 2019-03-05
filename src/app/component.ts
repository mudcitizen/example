import { ApplicationRef, Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "template.html",

})
export class ProductComponent {

    constructor(appRef:ApplicationRef){
        (<any>window).appRef = appRef;
        (<any>window).ProductComponent = this;
    }
}
