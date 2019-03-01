import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./product.model";
import {ProductFormGroup} from "./form.model";
import { Model } from "./repository.model";
import {LogService,LogLevel } from "./log.service";
@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html"
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    
    constructor(private model:Model, private logService:LogService) {
        let level:number = this.logService.minimumLevel;
        console.log("ProductFormComponent",logService.getObjectId(),level,LogLevel[level])
      }
    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}