import React, { useEffect, useState } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Ingresos_VS_Gastos from './Ingresos_VS_Gastos';
import Ingresos from './Ingresos';
import Gastos from './Gastos';
import Flujo_De_Caja from './Flujo_De_Caja';
import Footer from './Footer';
import html2canvas from 'html2canvas'; // Asegúrate de instalar esta biblioteca: npm install html2canvas

function Resumen_Financiero() {
    const [resultados, setResultados] = useState({
        ingresos: 0,
        gastos: 0,
        beneficioNeto: 0,
        totalFlujoCaja: 0,
        ventaProductos: 0,
        serviciosPrestados: 0,
        otrosIngresos: 0,
        costosBienesVendidos: 0,
        sueldosSalarios: 0,
        gastosOperativos: 0,
        otrosGastos: 0,
        flujoOperativo: 0,
        flujoInversion: 0,
        flujoFinanciero: 0
    });

    const handleCaptureAndPrint = () => {
        const mainContent = document.querySelector('.Main-Contador'); 
        if (!mainContent) return; 

        const buttonElement = document.getElementById('printButton'); 
        if (buttonElement) buttonElement.style.display = 'none'; 

        html2canvas(mainContent, { scrollY: -window.scrollY }).then((canvas) => {
            const image = canvas.toDataURL('image/png'); 
            const newWindow = window.open('', '_blank'); 

            newWindow.document.open();
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Imprimir Captura</title>
                        <style>
                            body {
                                margin: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                                background-color: #fff;
                            }
                            img {
                                max-width: 100%;
                                max-height: 100%;
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${image}" alt="Captura de pantalla" />
                        <script>
                            window.onload = function() {
                                setTimeout(() => {
                                    window.print(); 
                                    window.close();
                                }, 500); 
                            };
                        </script>
                    </body>
                </html>
            `);
            newWindow.document.close();

            if (buttonElement) buttonElement.style.display = 'block'; 
        });
    };

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
            <button
                id="printButton" 
                onClick={handleCaptureAndPrint}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#2B2972',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                Imprimir
            </button>
            <Footer />
        </>
    );
}

export default Resumen_Financiero;
