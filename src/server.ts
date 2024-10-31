import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos generados en la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Maneja cualquier ruta no específica y sirve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
