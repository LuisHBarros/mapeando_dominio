import { ProductRepository } from "../db/inMemory/Products.db";

export class TrackProduct{
    private productRepository: ProductRepository;
    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }
    public execute(productId: number) {
        return this.productRepository.getProductById(productId);
    }
}