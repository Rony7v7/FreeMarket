// src/server.ts
import express from 'express';
import api from './api/index'; // Importa `index.ts` desde `src/api`

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para manejar JSON
app.use(express.json());

// Monta todas las rutas de `api/index` bajo el prefijo `/api`
app.use('', api);

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
