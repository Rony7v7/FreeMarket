export class User {
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public password: string,
      public role: 'admin' | 'client',
      public purchaseHistory: String[] = []
    ) {}
  
    checkPassword(password: string): boolean {
      return this.password === password;
    }
  
    addToPurchaseHistory(orderId: String) {
        this.purchaseHistory.push(orderId);
    }
  }
  