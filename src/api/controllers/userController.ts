
import fs from 'fs';
import path from 'path';
import { User } from '../models/User';

const dataPath = path.join(__dirname, '../data/users.json');

function getUsers(): User[] {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data) as User[];
}

function addUser(newUser: User): User {
  const users = getUsers();
  users.push(newUser);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
  return newUser;
}

export { getUsers, addUser };
