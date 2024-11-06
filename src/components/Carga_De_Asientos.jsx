import React from 'react';
import Navbar_Aux_Contable from './Navbar_Aux_Contable';
import Footer from './Footer';

function Carga_De_Asientos() {
    return (
        <>
        <Navbar_Aux_Contable/>
        <main className='Main-Aux-Contable'>
            <section className='Contenedor-Formulario-Carga-Asientos'>
                    <form /*{onSubmit=handleSubmit}*/ className='Form-Carga-Asientos'>
                        <h2 className='H2-Form-Carga-Asientos'>Carga de Asientos</h2>
                        {/* CAMBIAR LOS VALORES DE LOS INPUTS YA QUE TIENEN LOS VALORES DE LOGIN*/}
                        <input type="text" placeholder='USUARIO' name='usuario' /*value={formDataSesion.usuario} onChange={handleInputChange}*/ required />
                        <input type="password" placeholder='CONTRASEÑA' name='password' /*value={formDataSesion.password} onChange={handleInputChange}*/ required />
                        <button className='Btn-Carga-Asientos'>Cargar</button>
                    </form>
            </section>
        </main>
        <Footer/>
        </>
    );
}

export default Carga_De_Asientos;