// paquetes instalados express y cors
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import sesionRoutes from '../routes/sesionRoutes.js';
import asientosRoutes from '../routes/asientos.js';
import balancesRoutes from '../routes/balances.js';
import resultadosRoutes from '../routes/resultados.js';
import flujoCajaRoutes from '../routes/flujoCaja.js';
import registroRoutes from '../routes/registroRoutes.js';
import revisionAsientosRoutes from '../routes/revisionAsientosRoutes.js';
import balances from '../routes/balances.js';
import resultados from '../routes/resultados.js';

const app = express();
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:5173', // permite solo el frontend
  }));

// Usa las rutas de autenticación
app.use(sesionRoutes);
app.use('/registro', registroRoutes);
app.use('/asientos', asientosRoutes);
app.use('/balances', balancesRoutes);
app.use('/resultados', resultadosRoutes);
app.use('/flujoCaja', flujoCajaRoutes);
app.use('/api/asientos', revisionAsientosRoutes);
app.use('/api/calcularBalances', balances);
app.use('/calcularResultados', resultados);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
