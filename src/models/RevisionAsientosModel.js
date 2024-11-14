// models/asientosModel.js

import db from '../backend/db.js';
/*
const obtenerAsientos = async () => {
    const query = `
        SELECT ac.ID_asiento, ac.fecha, ac.descripcion,
               c.nombre AS nombre_cuenta, da.tipo_movimiento, da.monto
        FROM asientos_contables ac
        LEFT JOIN detalle_asiento da ON ac.ID_asiento = da.asiento_id
        LEFT JOIN cuentas c ON da.cuenta_id = c.ID_cuenta
        ORDER BY ac.ID_asiento;
    `;

    try {
        const [rows] = await db.query(query);
        return rows;
    } catch (error) {
        throw new Error('Error al obtener los asientos contables: ' + error.message);
    }
};

export default obtenerAsientos;*/
const obtenerAsientos = async (req, res) => {
    try {
        const [asientos] = await db.query(`
            SELECT AC.ID_asiento, AC.fecha, AC.descripcion,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'debe' THEN C.nombre END) AS cuentas_debitadas,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'debe' THEN DA.monto END) AS montos_debe,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'haber' THEN C.nombre END) AS cuentas_acreditadas,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'haber' THEN DA.monto END) AS montos_haber
            FROM asientos_contables AS AC
            LEFT JOIN detalle_asiento AS DA ON AC.ID_asiento = DA.asiento_id
            LEFT JOIN cuentas AS C ON DA.cuenta_id = C.ID_cuenta
            GROUP BY AC.ID_asiento;
        `, { raw: true }); // Asegúrate de especificar { raw: true } si no está habilitado globalmente
        
        res.json(asientos); // Envía solo los datos
    } catch (error) {
        console.error('Error en getAsientos:', error);
        res.status(500).json({ error: 'Error al obtener los asientos contables' });
    }
};
export default obtenerAsientos;