import Usuario from '../models/Usuario.js';
import bcrypt from 'bcrypt';

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['ID_usuario', 'nombre', 'apellido', 'usuario', 'email', 'profesion', 'password'] // Agregar 'password'
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};


// Obtener un usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id, {
            attributes: ['ID_usuario', 'nombre', 'apellido', 'usuario', 'email', 'profesion', 'password'] // Agregar 'password'
        });
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};


// Crear un usuario
export const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, usuario, email, password, profesion } = req.body;
        const nuevoUsuario = await Usuario.create({ nombre, apellido, usuario, email, password, profesion });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    let { password, ...otrosDatos } = req.body; // Extraer password y mantener el resto de los datos

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

        // Si se proporciona una nueva contraseña, la encripta antes de actualizar
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            otrosDatos.password = hashedPassword;
        }

        await usuario.update(otrosDatos);
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

        await usuario.destroy();
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
