import React from 'react';
import './sesion.css';
import { useNavigate } from 'react-router-dom';

function FormSesion({  formDataSesion, handleInputChange }) {

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
            navigate('/#');
          } else {
            alert(data.mensaje);
          }
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
        }
      };

  return (
    <div className='contenedor-principal'>
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
              <a href="#"><i className="bx bxl-facebook-circle login-redes-icono"></i></a>
              <a href="#"><i className="bx bxl-instagram-alt login-redes-icono"></i></a>
            </div>
          </form>
        </div>

        <div className="formulario registro">
          <form action="" className='registro-form'>
            <h1 className="registro-title">Registrarse</h1>

            <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="registro-input" type="text" placeholder="Usuario" required />
            </div>

            <div className="input-box">
              <i className="bx bxs-envelope"></i>
              <input className="registro-input" type="email" placeholder="Email" required />
            </div>

            <div className="input-box">
              <i className="bx bxs-lock-alt"></i>
              <input className="registro-input" type="password" placeholder="Contraseña" required />
            </div>

            <div className="cuenta-con-una-cuenta">
              <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
            </div>


            <button type="submit" className="registro-boton">Crear cuenta</button>
            <p className="registro-p">o accede con</p>

            <div className="registro-redes-iconos">
              <a href="#"><i className="bx bxl-google login-redes-icono"></i></a>
              <a href="#"><i className="bx bxl-facebook-circle login-redes-icono"></i></a>
              <a href="#"><i className="bx bxl-instagram-alt login-redes-icono"></i></a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            asdasdasd
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSesion;