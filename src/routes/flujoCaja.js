// src/routes/flujoCaja.js
import express from 'express';
import calcularFlujoCaja from '../controllers/flujoCajaController.js'; // Importar directamente la función

const router = express.Router();

router.get('/calcularFlujoCaja', calcularFlujoCaja); // Llamar a la función directamente

export default router;

