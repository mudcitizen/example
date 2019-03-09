import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ModelModule} from "./model/model.module";
import { CommonModule } from "./common/common.module";



@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,ModelModule,CommonModule],
    declarations: [ProductComponent, 
        ProductTableComponent,
        ProductFormComponent,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent],
    bootstrap: [ProductComponent]
})
export class AppModule { }
