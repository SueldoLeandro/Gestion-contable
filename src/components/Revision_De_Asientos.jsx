import React, { useState, useEffect } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Revision_De_Asientos() {
    const [asientos, setAsientos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [subtotalDebe, setSubtotalDebe] = useState(0);
    const [subtotalHaber, setSubtotalHaber] = useState(0);
    const [notification, setNotification] = useState(null);

    const fetchAsientos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/asientos');
            if (!response.ok) throw new Error('Error en la solicitud al servidor');
            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            const processedData = data.map(asiento => {
                const debe = asiento.cuentas_debitadas
                    ? asiento.cuentas_debitadas.split(',').map((nombre, index) => ({
                        nombre_cuenta: nombre,
                        monto: parseFloat(asiento.montos_debe.split(',')[index]).toFixed(2)
                    }))
                    : [];
                const haber = asiento.cuentas_acreditadas
                    ? asiento.cuentas_acreditadas.split(',').map((nombre, index) => ({
                        nombre_cuenta: nombre,
                        monto: parseFloat(asiento.montos_haber.split(',')[index]).toFixed(2)
                    }))
                    : [];

                // Calcular totales de debe y haber para este asiento
                const totalDebe = debe.reduce((acc, item) => acc + parseFloat(item.monto), 0);
                const totalHaber = haber.reduce((acc, item) => acc + parseFloat(item.monto), 0);

                // Verificar si hay diferencia en este asiento
                const tieneDiferencia = totalDebe !== totalHaber;

                return {
                    ...asiento,
                    debe,
                    haber,
                    tieneDiferencia, // Agregar flag para identificar asientos con diferencia
                };
            });

            setAsientos(processedData);

            // Calcular subtotales generales
            const totalDebe = processedData.reduce((acc, asiento) => {
                return acc + asiento.debe.reduce((subAcc, item) => subAcc + parseFloat(item.monto), 0);
            }, 0);

            const totalHaber = processedData.reduce((acc, asiento) => {
                return acc + asiento.haber.reduce((subAcc, item) => subAcc + parseFloat(item.monto), 0);
            }, 0);

            setSubtotalDebe(totalDebe.toFixed(2));
            setSubtotalHaber(totalHaber.toFixed(2));

            // Verificar si hay diferencia en los subtotales generales
            if (totalDebe !== totalHaber) {
                setNotification('¡Atención! Hay una diferencia entre el subtotal del debe y el haber.');
            }

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
                        <>
                            {notification && <div className="notification">{notification}</div>}
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
                                            <td className={`Td-Tabla-Revision-Asientos ${asiento.tieneDiferencia ? 'resaltar-diferencia' : ''}`}>
                                                {asiento.debe.map((debe, index) => (
                                                    <p key={index}>${debe.monto}</p>
                                                ))}
                                            </td>
                                            <td className='Td-Tabla-Revision-Asientos'>
                                                {asiento.haber.map((haber, index) => (
                                                    <p key={index}>{haber.nombre_cuenta}</p>
                                                ))}
                                            </td>
                                            <td className={`Td-Tabla-Revision-Asientos ${asiento.tieneDiferencia ? 'resaltar-diferencia' : ''}`}>
                                                {asiento.haber.map((haber, index) => (
                                                    <p key={index}>${haber.monto}</p>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className='subtotales'>
                                <p>Subtotal debe: ${subtotalDebe}</p>
                                <p>Subtotal haber: ${subtotalHaber}</p>
                            </div>
                        </>
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