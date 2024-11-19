import db from '../backend/db.js';

const obtenerAsientos = async () => {
    try {
        // Realiza la consulta a la base de datos y obtiene los resultados completos
        const asientos = await db.query(
            `
            SELECT AC.ID_asiento, AC.fecha, AC.descripcion,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'debe' THEN C.nombre END) AS cuentas_debitadas,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'debe' THEN DA.monto END) AS montos_debe,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'haber' THEN C.nombre END) AS cuentas_acreditadas,
                   GROUP_CONCAT(CASE WHEN DA.tipo_movimiento = 'haber' THEN DA.monto END) AS montos_haber
            FROM asientos_contables AS AC
            LEFT JOIN detalle_asiento AS DA ON AC.ID_asiento = DA.asiento_id
            LEFT JOIN cuentas AS C ON DA.cuenta_id = C.ID_cuenta
            GROUP BY AC.ID_asiento
            ORDER BY AC.ID_asiento;
            `,
            { type: db.Sequelize.QueryTypes.SELECT, raw: true }
        );

        // Verifica los datos devueltos
        console.log('Datos devueltos por la consulta:', asientos);

        // Retorna las filas directamente como un arreglo
        return asientos;
    } catch (error) {
        console.error('Error en obtenerAsientos:', error);
        throw new Error('Error al obtener los asientos contables');
    }
};

export default obtenerAsientos;
