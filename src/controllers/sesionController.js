/*export const iniciarSesion = (req, res) => {
    const { usuario, password } = req.body;
  
    // Aquí va la llamada a la base de datos o lo que viene de ahi?
    if (usuario === 'admin' && password === '1234') {
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ mensaje: 'Datos incorrectos' });
    }
  };*/
  
  import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario.js';

  const iniciarSesion = async (req, res) => {
    try {
      const { usuario, password } = req.body;
  
      // Buscar el usuario por nombre de usuario
      const usuarioExistente = await Usuario.findOne({ where: { usuario } });
  
      if (!usuarioExistente) {
        return res.status(401).json({ mensaje: 'Usuario no encontrado' });
      }
  
      // Comparar contraseñas
      const passwordCorrecta = await bcrypt.compare(password, usuarioExistente.password);
      if (!passwordCorrecta) {
        return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
      }
  
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario: usuarioExistente });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
  };

  export default iniciarSesion;