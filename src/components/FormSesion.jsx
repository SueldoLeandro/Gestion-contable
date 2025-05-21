import React, { useState, useEffect } from "react";
import "./Inicio.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Swal from "sweetalert2";

function FormSesion({ formDataSesion, handleInputChange }) {
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataSesion),
    });

    const data = await response.json();
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: data.mensaje,
      });

      if (data.usuario.tipo === "auxiliar_contable") {
        navigate("/Carga-De-Asientos");
      } else if (data.usuario.tipo === "contador") {
        navigate("/Revision-De-Asientos");
      }

    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.mensaje,
      });
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error al conectar con el servidor",
    });
  }
};

  return (
    <div className="App">
      <Header />
      <Hero />
      <Servicios />
      <section id="formularioInicio" className="formularioInicio">
        <div className="login_izq">
        <img id="logo_login" src="/images/portal.png" alt="inicio"/>
        <h1> ¡Bienvenido de vuelta!</h1>
            <p>¿Qué tenemos pendiente hoy?</p>
        </div>
        <div className="form-inicio">
          <form onSubmit={handleSubmit}>
          <h3>Iniciar Sesión</h3>
          <div className="input-box">
              <i className="bx bxs-user-circle"></i>
              <input className="login-input" type="text" placeholder="Usuario" name='usuario' value={formDataSesion.usuario} onChange={handleInputChange} required />
            </div>

            <div className="input-box">
              <i className="bx bxs-lock-alt"></i>
              <input className="login-input" type="password" placeholder="Contraseña" name='password' value={formDataSesion.password} onChange={handleInputChange} required />
            </div>

            <div className="olvido-contraseña">
              {/*<a href="#">¿Olvidó su contraseña?</a>*/}
            </div>

            <button type="submit" className="login-boton">Iniciar</button>

          </form>
        </div>
      </section>
      <Nosotros/>
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="Logo_inicio">
        <img
          id="logo_header"
          src="/images/portal_sin_letra.png"
          alt="logo_header"
        />
        <h1 className="Portal">Portal Contable</h1>
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#formularioInicio">Comenzar</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="inicio" className="hero">
    <div className="hero-content">
      <h2>Contabilidad y Comodidad en un solo lugar</h2>
      <p>
        En Portal Contable, mantené tu negocio en orden y crecimiento constante.
      </p>
      <a href="#servicios" className="hero-button">
        Conocé más
      </a>
    </div>
  </section>
);

const Servicios = () => (
  <section id="servicios" className="servicios">
    <h3>Nuestros Servicios</h3>
    <div className="servicios-grid">
      <div className="hojas-de-calculo">
        <h4>Confección de Hojas de Cálculo</h4>
        <p>
          En JMV ingenieria SRL digitalizamos y automatizamos las hojas de calculos manuales.
        </p>
      </div>

      <div className="hojas-de-calculo">
        <h4>Análisis inteligente</h4>
        <p>
          Automatizámos los procesos con nuestro sistema de captura de datos para facturas, impulsado por un analisis inteligente de archivos PDF con una precisión del 98%.
        </p>
      </div>
    </div>

    <div className="servicios-grid">
      <div className="hojas-de-calculo">
        <h4>Acceso desde Cualquier Lugar</h4>
        <p>
          Trabajo remoto. La APP web permite al personal de la empresa acceder desde cualquier PC o notebook de forma remota.
        </p>
      </div>

      <div className="hojas-de-calculo">
        <h4>Control de datos</h4>
        <p>
          Con esta herramienta la empresa mejoró el control del registro de cuentas, ingresos y egresos, con el historial de asientos contable y las tablas de flujo de caja.
        </p>
      </div>
    </div>
  </section>
);

const Nosotros = () => (
  <section id="nosotros" className="nosotros">
    <h3>¿Quiénes somos?</h3>
    <div className="quienes-somos">
      <img src="/images/tablet.jpg" alt="tablet" />
      <p>
      Somos un equipo de profesionales apasionados por la contabilidad y la tecnología. Nuestro objetivo es simplificar la gestión contable de la empresa, brindándo herramientas innovadoras y un servicio excepcional.
<br />En Portal Contable, combinamos la precisión del mundo financiero con el dinamismo del desarrollo web para ofrecer una plataforma segura, funcional y en constante evolución. <br />Nuestro equipo está conformado por programadores especializados en tecnologías web modernas, expertos en usabilidad, diseño responsivo y ciberseguridad, quienes trabajan en conjunto con contadores y asesores financieros de JMV para garantizar que cada herramienta cumpla con los más altos estándares de calidad y utilidad práctica.    </p>
    </div>
{/*
    <div className="quienes-somos-2">
      <p>Además, creemos en la mejora continua. Por eso, escuchamos a nuestros usuarios, analizamos sus comentarios y desarrollamos nuevas funcionalidades que se adapten a sus retos cotidianos. Nuestro compromiso es que el Portal Contable no sea solo una herramienta, sino un aliado estratégico en el crecimiento de tu empresa.

<br />Contá con nosotros para llevar la contabilidad de tu negocio al siguiente nivel, respaldado por un equipo que entiende tanto de números como de código. 
<br /> Muchas gracias por llegar hasta aquí y por confiar en nosotros, estamos aquí para ayudarte a alcanzar tus metas financieras y empresariales. 

</p>
      <img src="/images/xd_inicio.jpg" alt="" />
    </div>*/}
  </section>
);

<Footer />;

export default FormSesion;
