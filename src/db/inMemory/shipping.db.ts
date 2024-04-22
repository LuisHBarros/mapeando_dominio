import { Shipping } from "../../entities/shipping";

export class ShippingRepository{
    private shippings: Shipping[];
    constructor() {
        if (!this.shippings) {
            this.shippings = [];
        }
    }
    public getShippings(): Shipping[] {
        return this.shippings;
    }
    public getShippingById(id: number): Shipping|null {
        return this.shippings.find(shipping => shipping.id === id) || null;
    }
    public addShipping(shipping: Shipping): void {
        this.shippings.push(shipping);
    }
}