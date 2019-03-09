import { Component,Input, ApplicationRef } from "@angular/core";
import { Model } from "../model/repository.model"
import { Product } from "../model/product.model";
import { LogService } from "../common/log.service"; 

@Component({
    selector: "paProductTable",
    providers:[LogService],
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    private _taxRate:string;
    set taxRate(tr:string) {
        this._taxRate = tr.trim();
    }
    get taxRate() : string {return this._taxRate;}
    
    constructor(appRef:ApplicationRef,private dataModel: Model){
        (<any>window).appRef = appRef,        
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