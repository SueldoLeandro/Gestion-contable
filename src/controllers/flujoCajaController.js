// controllers/flujoCajaController.js
import FlujoCaja from '../models/FlujoCaja.js';

const calcularFlujoCaja = async (req, res) => {
  try {
    const flujo_operativo = await FlujoCaja.sum('monto', { where: { tipo_flujo: 'Operativo' } });
    const flujo_inversion = await FlujoCaja.sum('monto', { where: { tipo_flujo: 'Inversión' } });
    const flujo_financiero = await FlujoCaja.sum('monto', { where: { tipo_flujo: 'Financiero' } });

    const total_flujo = flujo_operativo + flujo_inversion + flujo_financiero;

    res.json({
      flujo_operativo,
      flujo_inversion,
      flujo_financiero,
      total_flujo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al calcular el flujo de caja.' });
  }
};

export default calcularFlujoCaja;
