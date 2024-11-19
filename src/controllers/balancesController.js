/*import AsientoContable from '../models/AsientoContable.js';
import Cuenta from '../models/Cuenta.js';
import DetalleAsiento from '../models/detalle_asientoModel.js';

const balancesController = {
  calcularBalances: async (req, res) => {
    try {
      const activos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'activo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const pasivos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'pasivo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const patrimonio = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'patrimonio' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const calcularMonto = (detalles) => {
        let total = 0;
        detalles.forEach(({ tipo_movimiento, monto }) => {
          total += tipo_movimiento === 'debe' ? parseFloat(monto) : -parseFloat(monto);
        });
        return total;
      };

      const totalActivos = calcularMonto(activos);
      const totalPasivos = calcularMonto(pasivos);
      const totalPatrimonio = calcularMonto(patrimonio);

      res.json({
        activos: totalActivos,
        pasivos: totalPasivos,
        patrimonio: totalPatrimonio,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al calcular los balances.' });
    }
  },
};

export default balancesController;*/


import AsientoContable from '../models/AsientoContable.js';
import Cuenta from '../models/Cuenta.js';
import DetalleAsiento from '../models/detalle_asientoModel.js';

const balancesController = {
  calcularBalances: async (req, res) => {
    try {
      const activos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'activo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const pasivos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'pasivo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const calcularMonto = (detalles) => {
        let total = 0;
        detalles.forEach(({ tipo_movimiento, monto }) => {
          total += tipo_movimiento === 'debe' ? parseFloat(monto) : -parseFloat(monto);
        });
        return total;
      };

      const totalActivos = calcularMonto(activos);
      const totalPasivos = calcularMonto(pasivos);
      const patrimonioNeto = totalActivos + totalPasivos;
      console.log('holaa: ',totalActivos)
      console.log(totalPasivos)
      console.log(patrimonioNeto)

      res.json({
        activos: totalActivos,
        pasivos: totalPasivos,
        patrimonio: patrimonioNeto,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al calcular los balances.' });
    }
  },
};

export default balancesController;

