import React, { useEffect, useState } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Modificar_Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        email: "",
        profesion: "",
        password: ""
    });

    // Función para obtener los usuarios y actualizar la tabla
    const cargarUsuarios = () => {
        fetch('http://localhost:5000/api/usuarios')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setUsuarios(data);
                } else {
                    setUsuarios([]);
                }
            })
            .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        cargarUsuarios(); // Carga inicial de los usuarios
    }, []);

    const handleModificar = (usuario) => {
        if (usuarioSeleccionado?.ID_usuario === usuario.ID_usuario) {
            setUsuarioSeleccionado(null);
        } else {
            setUsuarioSeleccionado(usuario);
            setFormData({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                usuario: usuario.usuario,
                email: usuario.email,
                profesion: usuario.profesion,
                password: usuario.password // Ahora se mostrará la contraseña en el formulario
            });
        }
    };
    

    const handleBorrar = (id) => {
        const confirmar = window.confirm("¿Estás seguro de que quieres eliminar este usuario?");
        if (!confirmar) return;
    
        fetch(`http://localhost:5000/api/usuarios/${id}`, { method: 'DELETE' })
            .then(() => {
                cargarUsuarios(); // Recargar la lista después de borrar
            })
            .catch(error => console.error('Error:', error));
    };
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGuardarCambios = (e) => {
        e.preventDefault();
        const confirmar = window.confirm("¿Estás seguro de que quieres modificar este usuario?");
        if (!confirmar) return;
    
        fetch(`http://localhost:5000/api/usuarios/${usuarioSeleccionado.ID_usuario}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => {
            cargarUsuarios();
            setUsuarioSeleccionado(null);
        })
        .catch(error => console.error("Error:", error));
    };

    return (
        <>
            <Navbar_Contador />
            <main className='Main-Contador'>
                <section className='Contenedor-Mod-Usu'>
                    <table border="1" className='Modificar-Usu-Table'>
                        <thead className='Cabecera-Tabla-Revision-Asientos'>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Profesión</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <React.Fragment key={usuario.ID_usuario}>
                                    <tr>
                                        <td>{usuario.ID_usuario}</td>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.apellido}</td>
                                        <td>{usuario.usuario}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.profesion}</td>
                                        <td className='btn-contenedor'>
                                            <button className='buttonGuardar' onClick={() => handleModificar(usuario)}>Modificar</button>
                                            <button className='buttonLimpiar' onClick={() => handleBorrar(usuario.ID_usuario)}>Borrar</button>
                                        </td>
                                    </tr>
                                    {usuarioSeleccionado?.ID_usuario === usuario.ID_usuario && (
                                        <tr key={`form-${usuario.ID_usuario}`} className="formulario-activo">
                                            <td colSpan="7">
                                                <div className="formulario-modificar">
                                                    <form className='Modificar-Usu-Form' onSubmit={handleGuardarCambios}>
                                                        <label>Nombre:
                                                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                                        </label>

                                                        <label>Apellido:
                                                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                                                        </label>
                                                        <label>Usuario:
                                                            <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} required />
                                                        </label>
                                                        <label>Email:
                                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                                        </label>
                                                        <label>Profesión:
                                                            <select name="profesion" value={formData.profesion} onChange={handleChange} required>
                                                                <option value="auxiliar_contable">Auxiliar Contable</option>
                                                                <option value="contador">Contador</option>
                                                            </select>
                                                        </label>
                                                        <label>Contraseña:
                                                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                                                        </label>
                                                        <button type="submit">Guardar Cambios</button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Modificar_Usuarios;
