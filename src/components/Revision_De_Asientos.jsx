import React, { useState, useEffect } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Revision_De_Asientos() {
    const [asientos, setAsientos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAsientos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/asientos');
            if (!response.ok) throw new Error('Error en la solicitud al servidor');
            const data = await response.json();
            console.log('Respuesta del servidor:', data); // Verifica cómo es la respuesta

            // Procesa los datos recibidos
            const processedData = data.map(asiento => ({
                ...asiento,
                debe: asiento.cuentas_debitadas
                    ? asiento.cuentas_debitadas.split(',').map((nombre, index) => ({
                        nombre_cuenta: nombre,
                        monto: parseFloat(asiento.montos_debe.split(',')[index]).toFixed(2) // Aquí aplicamos toFixed(2)
                    }))
                    : [],
                haber: asiento.cuentas_acreditadas
                    ? asiento.cuentas_acreditadas.split(',').map((nombre, index) => ({
                        nombre_cuenta: nombre,
                        monto: parseFloat(asiento.montos_haber.split(',')[index]).toFixed(2) // Aquí aplicamos toFixed(2)
                    }))
                    : []
            }));

            setAsientos(processedData);
        } catch (error) {
            console.error("Error al cargar los asientos:", error);
            setAsientos([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAsientos();
    }, []);

    return (
        <>
            <Navbar_Contador onNavClick={fetchAsientos} />
            <main className='Main-Contador'>
                <section className='Contenedor-Revision-Asientos'>
                    {loading ? (
                        <p>Cargando asientos...</p>
                    ) : asientos.length > 0 ? (
                        <table className='Tabla-Revision-Asientos'>
                            <thead className='Cabecera-Tabla-Revision-Asientos'>
                                <tr className='Tr-Tabla-Revision-Asientos'>
                                    <th className='Th-Tabla-Revision-Asientos'>N° Asiento</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Fecha</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Descripción</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Cuenta debitada</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Debe</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Cuenta acreditada</th>
                                    <th className='Th-Tabla-Revision-Asientos'>Haber</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asientos.map(asiento => (
                                    <tr className='Tr-Tabla-Revision-Asientos' key={asiento.ID_asiento}>
                                        <td className='Td-Tabla-Revision-Asientos'>{asiento.ID_asiento}</td>
                                        <td className='Td-Tabla-Revision-Asientos'>{asiento.fecha}</td>
                                        <td className='Td-Tabla-Revision-Asientos'>{asiento.descripcion}</td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.debe.map((debe, index) => (
                                                <p key={index}>{debe.nombre_cuenta}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.debe.map((debe, index) => (
                                                <p key={index}>${debe.monto}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.haber.map((haber, index) => (
                                                <p key={index}>{haber.nombre_cuenta}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.haber.map((haber, index) => (
                                                <p key={index}>${haber.monto}</p>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hay asientos disponibles para mostrar</p>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Revision_De_Asientos;
