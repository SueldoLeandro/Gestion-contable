import React, { useEffect, useState } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Ingresos_VS_Gastos from './Ingresos_VS_Gastos';
import Ingresos from './Ingresos';
import Gastos from './Gastos';
import Flujo_De_Caja from './Flujo_De_Caja';
import Footer from './Footer';

function Resumen_Financiero() {
    const [resultados, setResultados] = useState({
        ingresos: 0,
        gastos: 0,
        beneficioNeto: 0,
        flujoOperativo: 0,
        flujoInversion: 0,
        flujoFinanciero: 0,
        totalFlujoCaja: 0
    });

    useEffect(() => {
        const obtenerResultados = async () => {
            try {
                const response = await fetch('http://localhost:5000/calcularResultados');
                const data = await response.json();
                setResultados(data);
            } catch (error) {
                console.error('Error al obtener los resultados:', error);
            }
        };

        obtenerResultados();
    }, []);

    return (
        <>
            <Navbar_Contador />
            <main className='Main-Contador'>
                <section className='Contenedor-Resumen-Financiero'>
                    <section className='Contenedor-Ingresos-VS-Gastos'>
                        <Ingresos_VS_Gastos resultados={resultados} />
                    </section>
                    <section className='Contenedor-Ingresos'>
                        <Ingresos resultados={resultados} />
                    </section>
                    <section className='Contenedor-Gastos'>
                        <Gastos resultados={resultados} />
                    </section>
                    <section className='Contenedor-Flujo-De-Caja'>
                        <Flujo_De_Caja resultados={resultados} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Resumen_Financiero;
