// controllers/asientosController.js
import obtenerAsientos from '../models/RevisionAsientosModel.js';

const getAsientos = async (req, res) => {
    try {
        const asientos = await obtenerAsientos();
        res.json(asientos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el historial de asientos', error: error.message });
    }
};

export default getAsientos;