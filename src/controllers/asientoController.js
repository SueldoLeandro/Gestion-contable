// controllers/asientoController.js
import AsientoContable from '../models/AsientoContable.js';
import DetalleAsiento from '../models/DetalleAsiento.js';

const asientoController = {
  crearAsiento: async (req, res) => {
    try {
      const { fecha, descripcion, detalles } = req.body;
      console.log(fecha)
      // Paso 1: Crear el asiento principal
      const asientoId = await AsientoContable.create(fecha, descripcion);

      // Paso 2: Crear los detalles en la tabla DetalleAsiento
      for (const detalle of detalles) {
        let { cuenta_id, tipo_movimiento, monto } = detalle;
        switch (cuenta_id) {
          case 'caja':
            cuenta_id = 1;
            break;
          case 'banco CC':
            cuenta_id = 2;
            break;
          case 'inventario':
            cuenta_id = 3;
            break;
          case 'proveedores':
            cuenta_id = 4;
            break;
          case 'salarios por pagar':
            cuenta_id = 5;
            break;
          case 'prestamo bancario':
            cuenta_id = 6;
            break;
          case 'cuentas por cobrar':
            cuenta_id = 7;
            break;
          case 'CPC servicios':
            cuenta_id = 8;
            break;
          case 'inversiones CP':
            cuenta_id = 9;
            break;
          case 'prov gastos':
            cuenta_id = 10;
            break;

          default:
            break;
        }
        await DetalleAsiento.create(asientoId, cuenta_id, tipo_movimiento, monto);
      }

      res.status(201).json({ message: 'Asiento creado exitosamente', asientoId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el asiento' });
    }
  },

  obtenerAsiento: async (req, res) => {
    try {
      const asientoId = req.params.id;

      // Paso 1: Obtener el asiento principal
      const asiento = await AsientoContable.findById(asientoId);

      if (!asiento) {
        return res.status(404).json({ error: 'Asiento no encontrado' });
      }

      // Paso 2: Obtener los detalles del asiento
      const detalles = await DetalleAsiento.findByAsientoId(asientoId);

      res.status(200).json({ asiento, detalles });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el asiento' });
    }
  },
};

export default asientoController;