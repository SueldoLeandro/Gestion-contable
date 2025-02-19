//import pdf from 'pdf-parse';
import { PDFDocument } from'pdf-lib';
import xml2js from 'xml2js';
//import PDFExtract from 'pdf.js-extract';
import { PDFExtract } from 'pdf.js-extract';
/*
const extractTextFromPDF = async (req, res) => {
    console.log("holaa",req.file); // Verifica si req.file está definido

  try {
    const fileBuffer = req.file.buffer;
    const pdfData = await pdf(fileBuffer);
    const text = pdfData.text;
    res.json({ text });
  } catch (error) {
    console.error('Error al extraer texto del PDF:', error);
    res.status(500).send('Error al extraer texto del PDF');
  }
};*/
const extractTextFromPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha subido ningún archivo' });
    }

    console.log('Archivo recibido:', req.file.originalname); 
    
    const pdfExtract = new PDFExtract();
    const options = {};
    const data = await pdfExtract.extractBuffer(req.file.buffer, options);
    let textContent = '';

    data.pages.forEach(page => {
      page.content.forEach(item => {
        textContent += item.str + ' ';
      });
    });
    console.log(textContent);

    res.json({ text: textContent });

  } catch (error) {
    console.error('Error al extraer texto del PDF:', error);
    res.status(500).send('Error al extraer texto del PDF');
  }
};

export default extractTextFromPDF;
