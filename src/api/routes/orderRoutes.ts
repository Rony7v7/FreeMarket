import { Router } from 'express';
import { getOrders, addOrder } from '../controllers/orderController.ts';

const router = Router();

router.get('/', (req, res) => {
  const orders = getOrders();
  res.json(orders);
});

router.post('/', (req, res) => {
  const newOrder = req.body;
  const addedOrder = addOrder(newOrder);
  res.status(201).json(addedOrder);
});

export default router;