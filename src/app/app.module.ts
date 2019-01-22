import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive"; 
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive"; 
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component"; 

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher,
        ProductTableComponent,
        ProductFormComponent,
        PaStructureDirective],
    bootstrap: [ProductComponent]
})
export class AppModule {}
