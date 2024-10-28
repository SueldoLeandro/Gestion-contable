// paquetes instalados express y cors
import express from 'express';
import cors from 'cors';
import sesionRoutes from '../routes/sesionRoutes.js';

const app = express();
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:5173', // permite solo el frontend
  }));

// Usa las rutas de autenticación
app.use(sesionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
