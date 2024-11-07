// src/server.ts
import express from 'express';
import userRoutes from './api/routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // Middleware para manejar JSON