import React, { useState } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Activo from './Activo';
import Pasivo from './Pasivo';
import PatrimonioNeto from './PatrimonioNeto';
import Footer from './Footer';
import html2canvas from 'html2canvas'; // Asegúrate de instalar esta biblioteca: npm install html2canvas

function Revision_De_Asientos() {
    const [isCapturing, setIsCapturing] = useState(false); // Estado para controlar la visibilidad del botón

    const handleCaptureAndPrint = () => {
        const mainContent = document.querySelector('.Main-Contador'); // Seleccionar el contenedor principal
        if (!mainContent) return; // Salir si el contenedor no se encuentra

        const buttonElement = document.getElementById('printButton'); // Obtener el botón por ID
        if (buttonElement) buttonElement.style.display = 'none'; // Ocultar el botón del DOM

        html2canvas(mainContent, { scrollY: -window.scrollY }).then((canvas) => {
            const image = canvas.toDataURL('image/png'); // Convertir el canvas a URL
            const newWindow = window.open('', '_blank'); // Abrir una nueva ventana en blanco

            // Escribir el contenido de la nueva ventana
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
                                    window.print(); // Mostrar la ventana de impresión
                                    window.close(); // Cerrar la ventana después de imprimir
                                }, 500); // Espera breve para asegurar que la imagen se renderice
                            };
                        </script>
                    </body>
                </html>
            `);
            newWindow.document.close();

            if (buttonElement) buttonElement.style.display = 'block'; // Restaurar el botón después de capturar
        });
    };

    return (
        <>
        <div id="root" className="revision-de-asientos">
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
            <button 
                id="printButton" // Agregar un ID para identificar el botón
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
            </div>
        </>
    );
}

export default Revision_De_Asientos;
