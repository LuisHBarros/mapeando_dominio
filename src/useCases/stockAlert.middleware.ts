import { ProductRepository } from "../db/inMemory/Products.db";
import { ItemInventory } from "../entities/ItemInventory";
import { EmailService } from "../utils/emailService";

export class StockAlertMiddleware{
    private productRepository: ProductRepository;
    private emailService: EmailService;
    public execute(shopping_cart: ItemInventory[]) {
        shopping_cart.forEach(item => {
            const product = this.productRepository.getProductById(item.product.id);
            if (!product) { // If the product does not exist
                throw new Error(`Product ${item.product.name} does not exist`);
            }
            if (product.stock < item.quantity) { // If the product exists and the stock is less than the requested quantity
                this.emailService.sendEmail('', 'Stock Alert', `Product ${product.name} has less stock than requested`);
                throw new Error(`Product ${product.name} has less stock than requested`);
            }
            if (product.stock - item.quantity >= product.min_stock) { // If the product exists and the stock is greater than the requested quantity
                this.emailService.sendEmail('', 'Stock Alert', `Product ${product.name} reached the established minimum stock`);
                console.log(`Product ${product.name} reached the established minimum stock`)
            }
        })
    }
}