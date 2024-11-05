import fs from 'fs';
import path from 'path';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

const dataPath = path.join(__dirname, '../data/orders.json');

// Función para obtener todas las órdenes
function getOrders(): Order[] {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data) as Order[];
}

// Función para añadir una nueva orden
function addOrder(newOrder: Order): Order {
  const orders = getOrders();
  orders.push(newOrder);
  fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));
  return newOrder;
}

// Función para calcular el monto total de la orden a partir de sus elementos
function calculateTotalAmount(items: OrderItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Crear y agregar una orden con cálculo automático de totalAmount
function createOrder(userId: string, items: OrderItem[]): Order {
  const orderId = `order_${Date.now()}`;  // Genera un ID único para la orden
  const date = new Date().toISOString();
  const totalAmount = calculateTotalAmount(items); // Calcula el total

  const newOrder: Order = {
      orderId,
      userId,
      date,
      items,
      totalAmount,
      status: 'pending',
      calculateTotalAmount: function (): number {
          throw new Error('Function not implemented.');
      }
  };

  return addOrder(newOrder);
}

export { getOrders, addOrder, createOrder };
