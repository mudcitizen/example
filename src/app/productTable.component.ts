import { Component,Input, ApplicationRef } from "@angular/core";
import { Model } from "./repository.model"
import { Product } from "./product.model";
import {DiscountService} from "./discount.service";

@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    private _taxRate:string;
    set taxRate(tr:string) {
        this._taxRate = tr.trim();
    }
    get taxRate() : string {return this._taxRate;}
        
    discounter : DiscountService = new DiscountService();
    
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

    getCategories() : string[] {
        return this.dataModel.getCategories();
    }

 
}