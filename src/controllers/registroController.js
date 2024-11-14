import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario.js';

const registrarUsuario = async (req, res) => {
    try {
      const { nombre, apellido, usuario, email, password, profesion } = req.body;
      console.log("Datos recibidos:", req.body);
      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear el nuevo usuario
      const nuevoUsuario = await Usuario.create({
        nombre,
        apellido,
        usuario,
        email,
        password: hashedPassword,
        profesion,
      });
  
      res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ mensaje: 'Error al registrar el usuario' });
    }
  };

  export default registrarUsuario;