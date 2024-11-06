import React from 'react';
import Navbar_Contador from './Navbar_Contador';
import Activo from './Activo';
import Pasivo from './Pasivo';
import PatrimonioNeto from './PatrimonioNeto';
import Footer from './Footer';

function Revision_De_Asientos() {
    return (
        <>
            <Navbar_Contador />
            <main className='Main-Contador'>
                <section className='Contenedor-Informacion'>
                    <section className='Contenedor-Activo'>
                        <Activo />
                    </section>
                    <section className='Contenedor-Pasivo'>
                        <Pasivo />
                    </section>
                    <section className='Contenedor-PatrimonioNeto'>
                        <PatrimonioNeto />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Revision_De_Asientos;