// src/api/controllers/userController.ts
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';

const dataPath = path.join(__dirname, '../data/users.json');
const secretKey = 'secret_key' 

// Leer usuarios desde el archivo JSON
function getUsers(): User[] {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data) as User[];
}

export const loginUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const isPasswordValid = password === user.password; // Comparación directa (insegura)
  if (!isPasswordValid) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '1h' });

  res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
};

// Guardar usuarios en el archivo JSON
function saveUsers(users: User[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

// Obtener todos los usuarios
export const getAllUsers = (req: Request, res: Response): void => {
  const users = getUsers();
  res.json(users);
};

// Crear un nuevo usuario
export const createUser = (req: Request, res: Response): void => {
  const users = getUsers();

  // Obtener el ID más alto en la lista y asignar uno nuevo
  const newUserId = users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) + 1 : 1;

  // Crear el nuevo usuario con el ID numérico asignado automáticamente
  const newUser: User = {
    id: newUserId.toString(), // Convertir a string si `id` es de tipo string en el modelo
    ...req.body
  };

  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
};
// Obtener un usuario por ID
export const getUserById = (req: Request, res: Response): void => {
  const users = getUsers();
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Actualizar un usuario por ID
export const updateUser = (req: Request, res: Response): void => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index !== -1) {
    const updatedUser = { ...users[index], ...req.body } as User;
    users[index] = updatedUser;
    saveUsers(users);
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Eliminar un usuario por ID
export const deleteUser = (req: Request, res: Response): void => {
  const users = getUsers();
  const filteredUsers = users.filter(u => u.id !== req.params.id);
  if (filteredUsers.length !== users.length) {
    saveUsers(filteredUsers);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
