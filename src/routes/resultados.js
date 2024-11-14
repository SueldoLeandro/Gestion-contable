// src/routes/resultados.js
import express from 'express';
import resultadosController from '../controllers/resultadosController.js';

const router = express.Router();

// Asegúrate de acceder a calcularResultados correctamente
router.get('/calcularResultados', resultadosController.calcularResultados);

export default router;
