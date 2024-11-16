import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';

const api = express();
api.use(express.json());

// api.use('/users', userRoutes);
api.use('/api/users', userRoutes);
api.use('/products', productRoutes);
api.use('/orders', orderRoutes);

export default api;
