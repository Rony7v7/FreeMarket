// src/api/routes/userRoutes.ts
import express from 'express';
import { getAllUsers, createUser, getUserById, updateUser, deleteUser, loginUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

// Añadir token para las rutas protegistas, por ejplo:
// router.get('/', authenticateToken, getAllUsers);

// Definición de rutas para usuarios
router.get('/', authenticateToken, getAllUsers);
router.post('/', createUser);          // Crear un nuevo usuario
router.get('/:id', getUserById);       // Obtener un usuario específico por ID
router.put('/:id', updateUser);        // Actualizar un usuario específico por ID
router.delete('/:id', deleteUser);     // Eliminar un usuario específico por ID
router.post('/login', loginUser);

export default router;
