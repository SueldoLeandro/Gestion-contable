// routes/asientosRoutes.js
import express from 'express';
import getAsientos from '../controllers/revisionAsientosController.js';

const router = express.Router();

// Define la ruta de historial en el servidor
router.get('/', getAsientos);

export default router;
