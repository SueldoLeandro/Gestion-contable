import React from 'react';
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
            navigate('/pagina-principal');
          } else {
            alert(data.mensaje);
          }
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
        }
      };


  return (
    <div className='contenedor-formulario'>
      <form onSubmit={handleSubmit}>
        <h2>Inicio de Sesión</h2>
        <input type="text" placeholder='USUARIO' name='usuario' value={formDataSesion.usuario} onChange={handleInputChange} required />
        <input type="password" placeholder='CONTRASEÑA' name='password' value={formDataSesion.password} onChange={handleInputChange} required />
        <button className='btn-sesion'>Ingresar</button>
      </form>
    </div>
  );
}

export default FormSesion;