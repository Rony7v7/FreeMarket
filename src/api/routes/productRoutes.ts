// src/api/routes/productRoutes.ts
import express from 'express';
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllProducts);          // Obtener todos los productos
router.post('/', authenticateToken, createProduct); // Crear un nuevo producto
router.get('/:id', getProductById);       // Obtener un producto específico por ID
router.put('/:id', authenticateToken, updateProduct);        // Actualizar un producto específico por ID
router.delete('/:id', authenticateToken, deleteProduct);     // Eliminar un producto específico por ID

export default router;
