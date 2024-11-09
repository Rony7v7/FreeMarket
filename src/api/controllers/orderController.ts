// src/api/controllers/orderController.ts
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { Order } from '../models/Order'; // Asegúrate de que la ruta sea correcta
import { OrderItem } from '../models/OrderItem'; // Asegúrate de que la ruta sea correcta
import { Product } from '../models/Product'; // Importa la clase Product

const dataPath = path.join(__dirname, '../data/orders.json');
const productDataPath = path.join(__dirname, '../data/products.json'); // Ruta para el archivo de productos

// Leer órdenes desde el archivo JSON
function getOrders(): Order[] {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data) as Order[];
}

// Guardar órdenes en el archivo JSON
function saveOrders(orders: Order[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));
}

// Leer productos desde el archivo JSON
// src/api/controllers/orderController.ts
function getProducts(): Product[] {
  const data = fs.readFileSync(productDataPath, 'utf8');
  const productsData = JSON.parse(data);

  // Convertir cada objeto producto en una instancia de la clase Product
  return productsData.map((product: any) => {
    return new Product(product.id, product.name, product.description, product.price, product.quantity);
  });
}

// Guardar productos en el archivo JSON
function saveProducts(products: Product[]): void {
  fs.writeFileSync(productDataPath, JSON.stringify(products, null, 2));
}

// Obtener todas las órdenes
export const getAllOrders = (req: Request, res: Response): void => {
  const orders = getOrders();
  res.json(orders);
};

// Crear una nueva orden
export const createOrder = (req: Request, res: Response): void => {
  const orders = getOrders();
  const products = getProducts(); // Obtener los productos actuales

  // Generar un nuevo ID para la orden
  const newOrderId = orders.length > 0 ? Math.max(...orders.map(o => parseInt(o.orderId))) + 1 : 1;

  // Crear la nueva orden con el constructor de la clase Order
  const newOrder = new Order(
    newOrderId.toString(), // orderId
    req.body.userId, // userId
    new Date().toISOString(), // date
    req.body.items as OrderItem[], // items
    0, // totalAmount, se calculará más tarde
    'pending' // status
  );

  // Calcular el total de la orden
  newOrder.calculateTotalAmount();

  // Disminuir la cantidad de productos según la orden
  for (const orderItem of newOrder.items) {
    const product = products.find(p => p.id === orderItem.productId);
    if (product) {
      product.updateStock(orderItem.quantity); // Usar el método updateStock para disminuir la cantidad
    }
  }

  // Guardar la orden
  orders.push(newOrder);
  saveOrders(orders);
  
  // Guardar los productos actualizados
  saveProducts(products);

  res.status(201).json(newOrder);
};


// Obtener una orden por ID
export const getOrderById = (req: Request, res: Response): void => {
  const orders = getOrders();
  const order = orders.find(o => o.orderId === req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

// Actualizar una orden por ID
export const updateOrder = (req: Request, res: Response): void => {
  const orders = getOrders();
  const index = orders.findIndex(o => o.orderId === req.params.id);
  if (index !== -1) {
    const updatedOrder = { ...orders[index], ...req.body };
    orders[index] = updatedOrder;
    saveOrders(orders);
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

// Eliminar una orden por ID
export const deleteOrder = (req: Request, res: Response): void => {
  const orders = getOrders();
  const filteredOrders = orders.filter(o => o.orderId !== req.params.id);
  if (filteredOrders.length !== orders.length) {
    saveOrders(filteredOrders);
    res.json({ message: 'Order deleted' });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
