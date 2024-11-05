import type { OrderItem } from "./OrderItem";

export class Order {
  constructor(
    public orderId: string,
    public userId: string,
    public date: string,
    public items: OrderItem[],  // Lista de productos en la orden
    public totalAmount: number = 0,
    public status: 'completed' | 'pending' | 'cancelled' = 'pending'
  ) {
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): number {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return this.totalAmount;
  }
}
