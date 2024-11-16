const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'api', 'data');
const destDir = path.join(__dirname, 'dist', 'api', 'data');

// Crear el directorio de destino si no existe
fs.mkdirSync(destDir, { recursive: true });

// Copiar los archivos JSON
fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.json')) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${srcFile} to ${destFile}`);
  }
});
