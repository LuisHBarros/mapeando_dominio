import { Product } from "../../entities/product";

export class ProductRepository{
    private products: Product[];
    constructor() {
        if (!this.products) {
            this.products = [];
        }
    }
    public getProducts(): Product[] {
        return this.products;
    }
    public getProductById(id: number): Product|null {
        return this.products.find(product => product.id === id) || null;
    }
    public addProduct(product: Product): void {
        this.products.push(product);
    }

}