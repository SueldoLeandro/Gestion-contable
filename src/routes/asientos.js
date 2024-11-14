// src/routes/asientos.js
import express from 'express';
import asientosController from '../controllers/asientoController.js';

const router = express.Router();

router.post('/guardarAsiento', asientosController.crearAsiento);

export default router;
