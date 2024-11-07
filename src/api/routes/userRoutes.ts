// src/api/routes/userRoutes.ts
import express from 'express';
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

// Definición de rutas para usuarios
router.get('/', getAllUsers);          // Obtener todos los usuarios
router.post('/', createUser);          // Crear un nuevo usuario
router.get('/:id', getUserById);       // Obtener un usuario específico por ID
router.put('/:id', updateUser);        // Actualizar un usuario específico por ID
router.delete('/:id', deleteUser);     // Eliminar un usuario específico por ID

export default router;
