// models/Usuario.js
import { DataTypes } from 'sequelize';
import db from '../backend/db.js';

const Usuario = db.define('Usuario', {
  ID_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profesion: {
    type: DataTypes.ENUM('auxiliar_contable', 'contador'),
    allowNull: false,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

export default Usuario;
