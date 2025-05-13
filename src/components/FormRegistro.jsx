import React from 'react';
import './sesion.css';
import { useNavigate } from 'react-router-dom';


function FormRegistro({  formDataRegistro, handleRegisterInputChange }) {

    const navigate = useNavigate();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/registro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataRegistro), // Asume que `formDataRegistro` tiene los datos del registro
          });
      
          const data = await response.json();
          if (response.ok) {
            alert(data.mensaje);
            navigate('/#'); // Navega a la página principal después del registro
          } else {
            alert(data.mensaje);
          }
        } catch (error) {
          console.error('Error en el registro:', error);
        }
      };

return (
  <div id="root" className="revision-de-asientos">
    <div className='contenedor-principal'>
       <li className='Li-boton-regresar'>
                        <a href="Revision-De-Asientos" className='boton-regresar'>Regresar</a>
                    </li>
      <div className="contenedor">
        <div className="formulario registro">
          <form onSubmit={handleRegisterSubmit} className='registro-form'>
            <h1 className="registro-title">Registrarse</h1>

            <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="registro-input" type="text" name="nombre" placeholder="Nombre" value={formDataRegistro.nombre} onChange={handleRegisterInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="registro-input" type="text" name="apellido" placeholder="Apellido" value={formDataRegistro.apellido} onChange={handleRegisterInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="registro-input" type="text" name="usuario" placeholder="Usuario" value={formDataRegistro.usuario} onChange={handleRegisterInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-envelope"></i>
              <input className="registro-input" type="email" name="email" placeholder="Email" value={formDataRegistro.email} onChange={handleRegisterInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-lock-alt"></i>
              <input className="registro-input" type="password" name="password" placeholder="Contraseña" value={formDataRegistro.password} onChange={handleRegisterInputChange} required />
            </div>

            <div className="input-tipo">
              <label><input className="registro-input" type="radio" name='profesion' value="auxiliar_contable"  onChange={handleRegisterInputChange} required />Auxiliar contable</label>
              <label><input className="registro-input" type="radio" name='profesion' value="contador"  onChange={handleRegisterInputChange} required />Contador</label>
            </div>

            <button type="submit" className="registro-boton">Crear cuenta</button>
          </form>
        </div>
        <div className="toggle-box">
          <div className="toggle-panel">
            <h1> ¡Bienvenido nuevo usuario!</h1>
            <p>Comienza ya a planificar.</p>
            <img src="/images/portal.png" alt="inicio"/>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default FormRegistro;