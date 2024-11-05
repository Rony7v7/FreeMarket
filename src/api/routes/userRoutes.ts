import { Router } from 'express';
import { addUser, getUsers } from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  const addedUser = addUser(newUser);
  res.status(201).json(addedUser);
});

export default router;
