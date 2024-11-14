// models/DetalleAsiento.js
import db from '../backend/db.js'; // conexión a la base de datos

const DetalleAsiento = {
  create: async (asiento_id, cuenta_id, tipo_movimiento, monto) => {
    await db.query(
      `INSERT INTO detalle_asiento (asiento_id, cuenta_id, tipo_movimiento, monto) VALUES ('${asiento_id}', '${cuenta_id}', '${tipo_movimiento}', '${monto}')`,
      { type: db.QueryTypes.INSERT }
      /*[asiento_id, cuenta_id, tipo_movimiento, monto]*/
    );
  },

  findByAsientoId: async (asiento_id) => {
    const result = await db.query(
      'SELECT * FROM detalle_asiento WHERE asiento_id = ?',
      [asiento_id]
    );
    return result;
  },
};

export default DetalleAsiento;
