import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";
import { Injectable } from "@angular/core";

@Injectable()
export class Model {
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;

    constructor(private dataSource: SimpleDataSource) {
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getCategories(): string[] {
        let categories: string[] = [];
        this.getProducts().forEach(p => {
            let cat : string = p.category;
            let idx : number = categories.indexOf(cat);
            if (categories.indexOf(p.category) == -1)
                categories.push(p.category)
        })
        return categories;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products
                .findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }
}
