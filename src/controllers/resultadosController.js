import { Op } from 'sequelize';
import Cuenta from '../models/Cuenta.js';
import DetalleAsiento from '../models/detalle_asientoModel.js';

const resultadosController = {
  calcularResultados: async (req, res) => {
    try {
      // Calcular Ingresos (sin filtro de nombre de cuenta ni tipo)
      const ingresos = await DetalleAsiento.findAll({
        include: {
          model: Cuenta,
          where: {
            tipo_cuenta: 'activo', // Tipo de cuenta para ingresos (ajustar si es necesario)
          },
        },
        attributes: ['tipo_movimiento', 'monto'],
      });

      console.log('Ingresos (sin filtros):', ingresos);  // Verifica los datos sin filtros

      const calcularMonto = (detalles) => {
        let total = 0;
        detalles.forEach(({ tipo_movimiento, monto }) => {
          total += tipo_movimiento === 'debe' ? parseFloat(monto) : -parseFloat(monto);
        });
        return total;
      };

      const totalIngresos = calcularMonto(ingresos);
      console.log('Total Ingresos (sin filtros):', totalIngresos);  // Verifica el resultado total de ingresos

      // Calcular Gastos (sin filtro de nombre de cuenta ni tipo)
      const gastos = await DetalleAsiento.findAll({
        include: {
          model: Cuenta,
          where: {
            tipo_cuenta: 'pasivo', // Tipo de cuenta para gastos (ajustar si es necesario)
          },
        },
        attributes: ['tipo_movimiento', 'monto'],
      });

      console.log('Gastos (sin filtros):', gastos);  // Verifica los datos sin filtros

      const totalGastos = calcularMonto(gastos);
      console.log('Total Gastos (sin filtros):', totalGastos);  // Verifica el resultado total de gastos
/*
      // Calcular Flujo Operativo (sin filtro de nombre de cuenta)
      const flujoOperativo = await DetalleAsiento.findAll({
        include: {
          model: Cuenta,
          where: { nombre: 'flujo_operativo' }
        },
        attributes: ['tipo_movimiento', 'monto'],
      });

      console.log('Flujo Operativo (sin filtros):', flujoOperativo);  // Verifica los datos sin filtros
      const flujoCajaOperativo = calcularMonto(flujoOperativo);
      console.log('Flujo Caja Operativo (sin filtros):', flujoCajaOperativo);  // Verifica el resultado del flujo operativo

      // Calcular Flujo de Inversión (sin filtro de nombre de cuenta)
      const flujoInversion = await DetalleAsiento.findAll({
        include: {
          model: Cuenta,
          where: { nombre: 'flujo_inversion' }
        },
        attributes: ['tipo_movimiento', 'monto'],
      });

      console.log('Flujo Inversión (sin filtros):', flujoInversion);  // Verifica los datos sin filtros
      const flujoCajaInversion = calcularMonto(flujoInversion);
      console.log('Flujo Caja Inversión (sin filtros):', flujoCajaInversion);  // Verifica el resultado del flujo de inversión

      // Calcular Flujo Financiero (sin filtro de nombre de cuenta)
      const flujoFinanciero = await DetalleAsiento.findAll({
        include: {
          model: Cuenta,
          where: { nombre: 'flujo_financiero' }
        },
        attributes: ['tipo_movimiento', 'monto'],
      });

      console.log('Flujo Financiero (sin filtros):', flujoFinanciero);  // Verifica los datos sin filtros
      const flujoCajaFinanciero = calcularMonto(flujoFinanciero);
      console.log('Flujo Caja Financiero (sin filtros):', flujoCajaFinanciero);  // Verifica el resultado del flujo financiero

      // Calcular total flujo de caja
      const totalFlujoCaja = flujoCajaOperativo + flujoCajaFinanciero + flujoCajaInversion;
      console.log('Total Flujo de Caja (sin filtros):', totalFlujoCaja);  // Verifica el total del flujo de caja
*/

// Función para calcular sumas basadas en el nombre de la cuenta
const calcularSumaPorCuenta = async (nombreCuenta) => {
  const resultado = await DetalleAsiento.findAll({
    include: {
      model: Cuenta,
      where: { nombre: nombreCuenta },
    },
    attributes: [[DetalleAsiento.sequelize.fn('sum', DetalleAsiento.sequelize.col('monto')), 'total']],
  });
  return parseFloat(resultado[0]?.dataValues.total || 0);
};

// Cálculos de variables específicas
const ventaProductos = await calcularSumaPorCuenta('cuentas por cobrar');
const serviciosPrestados = await calcularSumaPorCuenta('CPC servicios');
const otrosIngresos = await calcularSumaPorCuenta('inversiones CP');
const costosBienesVendidos = await calcularSumaPorCuenta('inventario');
const sueldosSalarios = await calcularSumaPorCuenta('salarios por pagar');
const gastosOperativos = await calcularSumaPorCuenta('proveedores');
const otrosGastos = await calcularSumaPorCuenta('prov gastos');
//const flujoOperativo = await calcularSumaPorCuenta('proveedores');
const flujoOperativo = ventaProductos + serviciosPrestados + costosBienesVendidos + sueldosSalarios + gastosOperativos;
const flujoInversion = await calcularSumaPorCuenta('inversiones CP');
const flujoFinanciero = await calcularSumaPorCuenta('prestamo bancario');
      // Enviar los resultados al frontend
      res.json({
        ingresos: totalIngresos,
        gastos: totalGastos,
        beneficioNeto: totalIngresos + totalGastos,
       /* flujoOperativo: flujoCajaOperativo,
        flujoInversion: flujoCajaInversion,
        flujoFinanciero: flujoCajaFinanciero,*/
        totalFlujoCaja: 0,
        ventaProductos:ventaProductos,
        serviciosPrestados:serviciosPrestados,
        otrosIngresos:otrosIngresos,
        costosBienesVendidos:costosBienesVendidos,
        sueldosSalarios:sueldosSalarios,
        gastosOperativos:gastosOperativos,
        otrosGastos:otrosGastos,
        flujoOperativo: flujoOperativo,
        flujoInversion:flujoInversion,
        flujoFinanciero:flujoFinanciero,
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error calculando los resultados' });
    }
  }
};

export default resultadosController;
