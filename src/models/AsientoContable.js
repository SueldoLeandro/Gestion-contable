// models/AsientoContable.js
import db from '../backend/db.js'; // conexión a la base de datos
import DetalleAsiento from './DetalleAsiento.js'; // importar el modelo de detalle de asiento

function formatDate(fecha) {
    let date;
    if (typeof fecha === 'object' && fecha.fecha) {
        date = new Date(fecha.fecha);
    } else {
        date = new Date(fecha);
    }
    if (isNaN(date.getTime())) {
        throw new Error(`Fecha inválida: ${fecha}`);
    }
    return date.toISOString().split('T')[0];
}

const AsientoContable = {
    create: async (fecha, descripcion) => {
        try {
            console.log('Valor de fecha recibido:', fecha);
            const formattedDate = formatDate(fecha);
            console.log(`Fecha formateada: ${formattedDate}`);

            // Insertar el nuevo asiento en la base de datos usando db.query
            const result = await db.query(
                `INSERT INTO asientos_contables (fecha, descripcion) VALUES (?, ?)`,
                { 
                    replacements: [formattedDate, descripcion],
                    type: db.QueryTypes.INSERT 
                }
            );
            console.log('Resultado de la inserción:', result);

            // Obtener el ID del nuevo asiento
            const nuevoAsientoId = result[0]; // Dependiendo de tu configuración, puede que necesites ajustar esto
            console.log('ID del nuevo asiento: ', nuevoAsientoId);
            return nuevoAsientoId; // Retorna el ID del nuevo asiento

        } catch (error) {
            console.error('Error al crear el asiento:', error.message);
        }
    },

    findById: async (id) => {
        const result = await db.query('SELECT * FROM asientos_contables WHERE id = ?', {
            replacements: [id],
            type: db.QueryTypes.SELECT
        });
        return result[0];
    }
};

export default AsientoContable;
