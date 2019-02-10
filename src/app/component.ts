import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

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
