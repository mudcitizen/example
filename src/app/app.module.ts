import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule} from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from "./components/components.module"



@NgModule({
    declarations : [ProductComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,ModelModule,ComponentsModule,CommonModule],
    bootstrap: [ProductComponent]
})
export class AppModule { }
