import {
    Directive, ViewContainerRef, TemplateRef, Input,
    OnInit, DoCheck
} from "@angular/core";
import {
    IterableDiffer, IterableDiffers,
    ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer
} from "@angular/core";
@Directive({
    selector: "[paForOf]"
})

export class PaIteratorDirective implements OnInit, DoCheck {
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>,
        private differs: IterableDiffers,
        private changeDetector: ChangeDetectorRef) { }

    private differ: DefaultIterableDiffer<any>;
    // Template binds an array to paForOf    
    @Input("paForOf")
    dataSource: any;

    ngOnInit() {
        this.differ = <DefaultIterableDiffer<any>>
            this.differs.find(this.dataSource).create();
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            console.log("ngDoCheck called, changes detected");
            changes.forEachAddedItem(addition => {
                this.container.createEmbeddedView(this.template,
                    new PaIteratorContext(addition.item,
                        addition.currentIndex, changes.length));
            });
        }
    }

}
}

class PaIteratorContext {
    odd: boolean; even: boolean;
    first: boolean; last: boolean;
    constructor(public $implicit: any, public index: number, public total: number) {
        this.odd = index % 2 === 1;
        this.even = !this.odd;
        this.first = index === 0;
        this.last = index === total - 1;
        /*    setInterval(() => {
               this.odd = !this.odd; this.even = !this.even;
               this.$implicit.price++;
           }, 2000); */

    }
}