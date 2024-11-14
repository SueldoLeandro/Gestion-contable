// controllers/resultadosController.js
import AsientoContable from '../models/AsientoContable.js';
import { Op } from 'sequelize';

const resultadosController = {
  calcularResultados: async (req, res) => {
    try {
      const ingresos = await AsientoContable.sum('monto_haber', {
        where: { cuenta_haber_id: { [Op.like]: 'Ingreso%' } },
      });

      const gastos = await AsientoContable.sum('monto_debe', {
        where: { cuenta_debe_id: { [Op.like]: 'Gasto%' } },
      });

      const beneficio_neto = ingresos - gastos;

      res.json({ ingresos, gastos, beneficio_neto });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al calcular los resultados.' });
    }
  }
};

export default resultadosController;
