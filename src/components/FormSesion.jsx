import React from 'react';
import './sesion.css';
/*import { useNavigate } from 'react-router-dom';

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
            navigate('/pagina-principal');
          } else {
            alert(data.mensaje);
          }
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
        }
      };

    export default FormSesion; */

const App = () => {
  return (
    <div className="contenedor">
      <div className="formulario login">
        <form action="">
          <h1>Iniciar sesión</h1>

          <div className="input-box">
            <i className="bx bxs-user-circle"></i>
            <input type="text" placeholder="Usuario" required />
          </div>

          <div className="input-box">
            <i className="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Contraseña" required />
          </div>

          <div className="olvido-contraseña">
            <a href="#">¿Olvidó su contraseña?</a>
          </div>

          <button type="submit" className="boton">Iniciar</button>
          <p>o accede con</p>

          <div className="redes-iconos">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          </div>
        </form>
      </div>

      <div className="formulario registro">
        <form action="">
          <h1>Registrarse</h1>

          <div className="input-box">
            <i className="bx bxs-user-circle"></i>
            <input type="text" placeholder="Usuario" required />
          </div>

          <div className="input-box">
            <i className="bx bxs-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <i className="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Contraseña" required />
          </div>

          <div className="cuenta-con-una-cuenta">
            <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
          </div>


          <button type="submit" className="boton">Crear cuenta</button>
          <p>o accede con</p>

          <div className="redes-iconos">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          asdasdasd
        </div>
      </div>
    </div>
  );
};
export default App;