import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";

@Component({
    selector: "app",
    templateUrl: "template.html",

})
export class ProductComponent {

    model: Model = new Model();

    discounter : DiscountService = new DiscountService();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

    constructor(appRef:ApplicationRef){
        (<any>window).appRef = appRef;
        (<any>window).ProductComponent = this;
    }
}
