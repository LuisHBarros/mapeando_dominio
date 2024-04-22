import { ItemInventory } from "./ItemInventory";

export interface Shipping{
    id: number;
    date: Date;
    status: string;
    user: string;
    address: string;
    shopping_cart : ItemInventory[];
}