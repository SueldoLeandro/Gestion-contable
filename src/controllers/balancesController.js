import AsientoContable from '../models/AsientoContable.js';
import Cuenta from '../models/Cuenta.js';
import { Op } from 'sequelize';

const balancesController = {
  calcularBalances: async (req, res) => {
    try {
      const activos = await AsientoContable.sum('monto_debe', {
        include: [{ model: Cuenta, where: { tipo_cuenta: { [Op.like]: 'Activo%' } } }],
      });

      const pasivos = await AsientoContable.sum('monto_haber', {
        include: [{ model: Cuenta, where: { tipo_cuenta: { [Op.like]: 'Pasivo%' } } }],
      });

      res.json({ activos, pasivos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al calcular los balances.' });
    }
  },
};

export default balancesController;
