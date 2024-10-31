export interface User {
    id: string;
    password: string;
    role: 'admin' | 'client';
    purchaseHistory?: string[];
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
  
  export interface Order {
    orderId: string;
    userId: string;
    date: string;
    items: { productId: string; quantity: number; price: number }[];
    totalAmount: number;
    status: 'completed' | 'pending' | 'cancelled';
  }
  