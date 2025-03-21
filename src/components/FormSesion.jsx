import React, { useState, useEffect } from 'react';
import './sesion.css';
import { useNavigate } from 'react-router-dom';

function FormSesion({ formDataSesion, handleInputChange }) {

    /* HACE QUE EL FONDO CAMBIE DE COLORES PERO ROMPE UN POCO AL INICIAR SESION
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        document.querySelector('.contenedor-principal').addEventListener('mousemove', handleMouseMove);

        return () => {
            document.querySelector('.contenedor-principal').removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calcBackgroundPosition = () => {
        const x = mousePosition.x / window.innerWidth * 100;
        const y = mousePosition.y / window.innerHeight * 100;
        return `${x}% ${y}%`;
    };
 */
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // fetch para iniciar sesion
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataSesion),
          });
    
          const data = await response.json();
          if (response.ok) {
            alert(data.mensaje);
            // Redireccionar según el tipo de usuario
            if (data.usuario.tipo === 'auxiliar_contable') {
                navigate('/Carga-De-Asientos');
            } else if (data.usuario.tipo === 'contador') {
                navigate('/Revision-De-Asientos');
            }
          } else {
            alert(data.mensaje);
          }
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
        }
      };

  return (
    <div className='contenedor-principal' /* style={{ backgroundPosition: calcBackgroundPosition() }} */>
      <div className="contenedor">
        <div className="formulario login">
          <form onSubmit={handleSubmit} className='login-form'>
            <h1 className="login-title">Iniciar sesión</h1>

            <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="login-input" type="text" placeholder="Usuario" name='usuario' value={formDataSesion.usuario} onChange={handleInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-lock-alt"></i>
              <input className="login-input" type="password" placeholder="Contraseña" name='password' value={formDataSesion.password} onChange={handleInputChange} required />
            </div>

            <div className="olvido-contraseña">
              <a href="#">¿Olvidó su contraseña?</a>
            </div>

            <button type="submit" className="login-boton">Iniciar</button>
            <p className="login-p">o accede con</p>

            <div className='login-redes-iconos'>
              <a href="#"><i className="bx bxl-google login-redes-icono"></i></a>

            </div>
          </form>
        </div>
        <div className="toggle-box">
          <div className="toggle-panel">
            <h1> ¡Bienvenido de vuelta!</h1>
            <p>¿Qué tenemos pendiente hoy?</p>
            <img src="/images/portal.png" alt="inicio"/>

          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSesion;
