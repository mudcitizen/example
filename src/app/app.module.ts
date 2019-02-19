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
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive"
import { Model } from "./repository.model";
import { SimpleDataSource } from "./datasource.model";
import { LogService, LogLevel } from "./log.service";
import { LOG_LEVEL } from "./log.service";
import { SpecialLogService } from "./speciallogservice.service"

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel,
        PaIteratorDirective,
        PaCellColor,
        PaCellColorSwitcher,
        ProductTableComponent,
        ProductFormComponent,
        PaToggleView,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent,
        PaDiscountPipe,
        PaDiscountAmountDirective,
        PaStructureDirective],
    providers: [DiscountService,
        SimpleDataSource,
        { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
        {
            provide: LogService, 
            deps: [LOG_LEVEL], 
            useFactory: (level) => {
                let logger = new LogService();
                logger.minimumLevel = level;
                return logger;
            }
        },
        Model
    ],
    bootstrap: [ProductComponent]
})
export class AppModule { }
