import express from 'express';
import registrarUsuario from '../controllers/registroController.js';

const router = express.Router();

// Ruta para registro
router.post('/', registrarUsuario);

export default router;