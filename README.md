
# FreeMarket

FreeMarket es una aplicación de comercio que combina un frontend desarrollado con **Astro** y un backend basado en **Express** para gestionar usuarios, productos y órdenes. Este proyecto utiliza **TypeScript**, **Tailwind CSS** y manipula datos almacenados en formato JSON.

## 👥 Integrantes 
* David Artunduaga Penagos(A00396342)
* Rony Farid Ordoñez García
* Gabriel Ernesto Escobar
* Vanessa Sánchez Morales

## 📂 Estructura del Proyecto

```plaintext
./
├── public/
├── src/
│   ├── api/            # Backend
│   ├── components/     # Componentes Astro
│   ├── layouts/        # Plantillas generales
│   ├── pages/          # Páginas del sitio
│   └── server.ts       # Entrada principal del servidor
├── package.json        # Configuración de dependencias y scripts
├── tailwind.config.mjs # Configuración de Tailwind CSS
├── tsconfig.json       # Configuración de TypeScript
└── .gitignore          # Archivos ignorados por Git
```

## 🚀 Requisitos Previos

1. **Node.js**: Asegúrate de tener instalada la versión 16 o superior.
2. **npm**: Incluido con Node.js.

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd FreeMarket
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🏃‍♂️ Ejecución del Proyecto

### 1. Configuración y Ejecución del Backend

1. Abre una terminal.
2. Construye el proyecto con:
   ```bash
   npm run build
   ```
3. Compila los archivos TypeScript:
   ```bash
   npx tsc
   ```
4. Ejecuta el servidor backend:
   ```bash
   npm start
   ```
5. El backend estará disponible en: [http://localhost:4000](http://localhost:4000).

### 2. Configuración y Ejecución del Frontend

1. En una nueva terminal, inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. El frontend estará disponible en: [http://localhost:4321](http://localhost:4321).

### Sincronización de Datos
Ejecuta el siguiente comando en una tercera terminal para observar cambios en los archivos JSON y sincronizarlos automáticamente:
```bash
npm run watch-json
```

## 🧪 Scripts Disponibles

| Comando              | Acción                                                 |
|----------------------|-------------------------------------------------------|
| `npm run dev`        | Inicia el servidor de desarrollo del frontend.         |
| `npm start`          | Inicia el servidor backend.                            |
| `npm run build`      | Compila el proyecto completo para producción.          |
| `npm run sync-data`  | Sincroniza los datos entre archivos JSON.              |
| `npx tsc`            | Compila los archivos TypeScript.                       |

## ⚠️ Notas Importantes

- **Persistencia**: Los datos se manejan a través de archivos JSON en la carpeta `src/api/data/`. Asegúrate de no borrar estos archivos accidentalmente.
- **Autenticación**: Algunas rutas están protegidas y requieren un token JWT.

## 🛠️ Tecnologías Usadas

- **Astro**: Framework de frontend.
- **Express**: Framework de backend.
- **TypeScript**: Para tipado estático.
- **Tailwind CSS**: Estilización del frontend.
- **JSON Web Token (JWT)**: Manejo de autenticación y autorización.

