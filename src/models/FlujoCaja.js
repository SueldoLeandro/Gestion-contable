// models/FlujoCaja.js
import { DataTypes } from 'sequelize';
import sequelize from '../backend/db.js';

const FlujoCaja = sequelize.define('FlujoCaja', {
  tipo_flujo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'FlujoCaja',
  timestamps: false,
});

export default FlujoCaja;
