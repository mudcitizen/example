import { Component,Input, ApplicationRef } from "@angular/core";
import { Model } from "./repository.model"
import { Product } from "./product.model";
import { ViewChildren, QueryList} from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    
    @Input("model")
    dataModel : Model;

    constructor(appRef:ApplicationRef){
        (<any>window).appRef = appRef;
        (<any>window).prodTableComponent = this;

    }

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }
    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }
    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }
 
}