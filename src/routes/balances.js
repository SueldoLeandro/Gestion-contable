import express from 'express';
import balancesController from '../controllers/balancesController.js';
const router = express.Router();

router.get('/calcularBalances', balancesController.calcularBalances);

export default router;
