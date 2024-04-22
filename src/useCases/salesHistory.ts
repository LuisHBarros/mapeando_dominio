import { PurchaseOrderRepository } from "../db/inMemory/PurchaseOrder.db";

interface GetSalesHistoryDataRequest{
    month: number;
}

export class salesHistory{
    private purchaseOrderRepository: PurchaseOrderRepository;
    constructor() {
        this.purchaseOrderRepository = new PurchaseOrderRepository();
    }
    public execute(data: GetSalesHistoryDataRequest) {
        return this.purchaseOrderRepository.filterPurchaseOrdersByMonth(data.month);
    }
}