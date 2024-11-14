// models/Cuenta.js
import { DataTypes } from 'sequelize';
import sequelize from '../backend/db.js';

const Cuenta = sequelize.define('Cuenta', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_cuenta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Cuentas',
  timestamps: false,
});

export default Cuenta;