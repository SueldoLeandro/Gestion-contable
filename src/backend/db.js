// db.js
import { Sequelize } from 'sequelize';

// Configuración de la conexión
const db = new Sequelize('portalcontable', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mariadb',
});

export default db;