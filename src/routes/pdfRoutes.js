import express from 'express';
import multer from 'multer';
import extractTextFromPDF from '../controllers/pdfController.js';

const router = express.Router();
//const upload = multer();
const storage = multer.memoryStorage(); // Guarda en memoria
const upload = multer({ storage });


router.post('/extract-text', upload.single('file'), extractTextFromPDF);

export default router;
