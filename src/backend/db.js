// db.js
import { Sequelize } from 'sequelize';

// Configuración de la conexión
const db = new Sequelize('portalcontable', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    multipleStatements: true,
  },
  logging: false, // Opcional: para desactivar logs en consola
  define: {
    freezeTableName: true, // Evita pluralización automática
    timestamps: false, // Desactiva las columnas createdAt/updatedAt
  },
});

export default db;