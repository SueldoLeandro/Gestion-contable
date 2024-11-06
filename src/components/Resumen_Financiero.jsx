import React from 'react';
import Navbar_Contador from './Navbar_Contador';
import Ingresos_VS_Gastos from './Ingresos_VS_Gastos';
import Ingresos from './Ingresos';
import Gastos from './Gastos';
import Flujo_De_Caja from './Flujo_De_Caja';
import Footer from './Footer';

function Resumen_Financiero() {
    return (
        <>
            <Navbar_Contador />
            <main className='Main-Contador'>
                <section className='Contenedor-Resumen-Financiero'>
                    <section className='Contenedor-Ingresos-VS-Gastos'>
                        <Ingresos_VS_Gastos />
                    </section>
                    <section className='Contenedor-Ingresos'>
                        <Ingresos />
                    </section>
                    <section className='Contenedor-Gastos'>
                        <Gastos />
                    </section>
                    <section className='Contenedor-Flujo-De-Caja'>
                        <Flujo_De_Caja />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Resumen_Financiero;