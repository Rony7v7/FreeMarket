export class OrderItem {
    constructor(
      public productId: string,
      public quantity: number,
      public price: number  // Precio al momento de la compra
    ) {}
  }
  