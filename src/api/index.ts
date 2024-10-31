import express from 'express';
import userRoutes from './routes/userRoutes.ts';
import productRoutes from './routes/productRoutes.ts';
import orderRoutes from './routes/orderRoutes.ts';

const api = express.Router();

api.use('/users', userRoutes);
api.use('/products', productRoutes);
api.use('/orders', orderRoutes);

export default api;
