import { ItemInventory } from "./ItemInventory";
import { Product } from "./product";

export interface PurchaseOrder {
    id: number;
    date: Date;
    total: number;
    status: string;
    user: string; // Something to identify who made the purchase
    shopping_cart : ItemInventory[];
}
