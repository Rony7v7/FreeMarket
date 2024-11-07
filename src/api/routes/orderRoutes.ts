// src/api/routes/orderRoutes.ts
import express from 'express';
import { getAllOrders, createOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController';

const router = express.Router();

// Definición de rutas para órdenes
router.get('/', getAllOrders);          // Obtener todas las órdenes
router.post('/', createOrder);          // Crear una nueva orden
router.get('/:id', getOrderById);       // Obtener una orden específica por ID
router.put('/:id', updateOrder);        // Actualizar una orden específica por ID
router.delete('/:id', deleteOrder);     // Eliminar una orden específica por ID

export default router;
