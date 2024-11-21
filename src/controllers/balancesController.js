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

/*
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
*/
import DetalleAsiento from '../models/detalle_asientoModel.js';
import Cuenta from '../models/Cuenta.js';

const balancesController = {
  calcularBalances: async (req, res) => {
    try {
      // Obtener y calcular activos
      const activos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'activo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const totalActivos = activos.reduce((total, { tipo_movimiento, monto }) => {
        const valor = parseFloat(monto);
        return tipo_movimiento === 'debe' ? total + valor : total - valor;
      }, 0);

      // Obtener y calcular pasivos
      const pasivos = await DetalleAsiento.findAll({
        include: [{ model: Cuenta, where: { tipo_cuenta: 'pasivo' } }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const totalPasivos = pasivos.reduce((total, { tipo_movimiento, monto }) => {
        const valor = parseFloat(monto);
        return tipo_movimiento === 'haber' ? total + valor : total - valor;
      }, 0);

      // Respuesta final
      res.json({
        activos: totalActivos,
        pasivos: totalPasivos,
        patrimonio: totalActivos - totalPasivos,
      });
    } catch (error) {
      console.error('Error al calcular balances:', error);
      res.status(500).json({ message: 'Error al calcular los balances.' });
    }
  },
};

export default balancesController;


