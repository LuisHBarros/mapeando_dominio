import { PurchaseOrder } from "../../entities/purchaseOrder";

export class PurchaseOrderRepository{
    private purchaseOrders: PurchaseOrder[];
    constructor() {
        if (!this.purchaseOrders) {
            this.purchaseOrders = [];
        }
    }
    public getPurchaseOrders(): PurchaseOrder[] {
        return this.purchaseOrders;
    }
    public getPurchaseOrderById(id: number): PurchaseOrder|null {
        return this.purchaseOrders.find(purchaseOrder => purchaseOrder.id === id) || null;
    }
    public addPurchaseOrder(purchaseOrder: PurchaseOrder): void {
        this.purchaseOrders.push(purchaseOrder);
    }
    public updatePurchaseOrderStatus(status: string, id: number): void {
        const index = this.purchaseOrders.findIndex(purchaseOrder => purchaseOrder.id === id);
        this.purchaseOrders[index].status = status;
    }
    public filterPurchaseOrdersByMonth(month: number): PurchaseOrder[] {
        return this.purchaseOrders.filter(purchaseOrder => purchaseOrder.date.getMonth() === month);
    }
}