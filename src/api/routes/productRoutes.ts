// src/api/routes/productRoutes.ts
import express from 'express';
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.get('/', getAllProducts);          // Obtener todos los productos
router.post('/', createProduct);          // Crear un nuevo producto
router.get('/:id', getProductById);       // Obtener un producto específico por ID
router.put('/:id', updateProduct);        // Actualizar un producto específico por ID
router.delete('/:id', deleteProduct);     // Eliminar un producto específico por ID

export default router;
