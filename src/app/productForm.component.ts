import { Component,Inject,SkipSelf } from "@angular/core";
import { ProductFormGroup } from "./model/form.model";
import { LogLevel, LogService } from "./common/log.service";
import { Product } from "./model/product.model";
import { Model } from "./model/repository.model";
import { VALUE_SERVICE } from "./common/valueDisplay.directive";

@Component({
    selector: "paProductForm",
    viewProviders: [{ provide: VALUE_SERVICE, useValue: "Oranges" }],
    templateUrl: "productForm.component.html"    
})
export class ProductFormComponent {   
    constructor(private model:Model, private logService:LogService,
        @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string) {
        let level:number = this.logService.minimumLevel;
        console.log("ProductFormComponent - serviceValue",serviceValue)
      }
      form: ProductFormGroup = new ProductFormGroup();
      newProduct: Product = new Product();
      formSubmitted: boolean = false;
  
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