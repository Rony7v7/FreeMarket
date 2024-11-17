import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';

import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors(
    {
        origin: 'http://localhost:4321',
        credentials: true
    }
));

// api.use('/users', userRoutes);
api.use('/api/users', userRoutes);
api.use('/products', productRoutes);
api.use('/orders', orderRoutes);

export default api;
