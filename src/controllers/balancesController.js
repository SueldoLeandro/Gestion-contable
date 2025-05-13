import DetalleAsiento from '../models/detalle_asientoModel.js';
import Cuenta from '../models/Cuenta.js';

const balancesController = {
  calcularBalances: async (req, res) => {
    try {
      // Obtener y calcular activos específicos
      const activos = await DetalleAsiento.findAll({
        include: [{ 
          model: Cuenta, 
          where: { nombre: ['inventario', 'cuentas por cobrar', 'inversiones CP'] } 
        }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const totalActivos = activos.reduce((total, { tipo_movimiento, monto }) => {
        const valor = parseFloat(monto);
        //return tipo_movimiento === 'debe' ? total + valor : total - valor;
        return total + valor;
      }, 0);

      // Obtener y calcular pasivos específicos
      const pasivos = await DetalleAsiento.findAll({
        include: [{ 
          model: Cuenta, 
          where: { nombre: ['salarios por pagar', 'proveedores', 'prestamo bancario'] } 
        }],
        attributes: ['tipo_movimiento', 'monto'],
      });

      const totalPasivos = pasivos.reduce((total, { tipo_movimiento, monto }) => {
        const valor = parseFloat(monto);
        //return tipo_movimiento === 'haber' ? total + valor : total - valor;
        return  total + valor;
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