import { DataTypes } from 'sequelize';
import sequelize from '../backend/db.js';
import Cuenta from './Cuenta.js';

const DetalleAsiento = sequelize.define('DetalleAsiento', {
    ID_detalle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tipo_movimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'detalle_asiento',
    timestamps: false,
});

DetalleAsiento.belongsTo(Cuenta, { foreignKey: 'cuenta_id' });

export default DetalleAsiento;
