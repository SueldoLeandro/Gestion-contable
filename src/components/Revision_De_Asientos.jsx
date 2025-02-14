import { useState, useEffect } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Revision_De_Asientos() {
    const [asientos, setAsientos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [subtotalDebe, setSubtotalDebe] = useState(0);
    const [subtotalHaber, setSubtotalHaber] = useState(0);
    const [notification, setNotification] = useState(null);
    const [searchFecha, setSearchFecha] = useState('');
    const [searchAsiento, setSearchAsiento] = useState('');

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

                const totalDebe = debe.reduce((acc, item) => acc + parseFloat(item.monto), 0);
                const totalHaber = haber.reduce((acc, item) => acc + parseFloat(item.monto), 0);
                const tieneDiferencia = totalDebe !== totalHaber;

                return {
                    ...asiento,
                    debe,
                    haber,
                    tieneDiferencia,
                };
            });

            setAsientos(processedData);

            const totalDebe = processedData.reduce((acc, asiento) => {
                return acc + asiento.debe.reduce((subAcc, item) => subAcc + parseFloat(item.monto), 0);
            }, 0);

            const totalHaber = processedData.reduce((acc, asiento) => {
                return acc + asiento.haber.reduce((subAcc, item) => subAcc + parseFloat(item.monto), 0);
            }, 0);

            setSubtotalDebe(totalDebe.toFixed(2));
            setSubtotalHaber(totalHaber.toFixed(2));

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

    const filteredAsientos = asientos.filter(asiento => 
        (searchFecha === '' || asiento.fecha.includes(searchFecha)) &&
        (searchAsiento === '' || asiento.ID_asiento.toString().includes(searchAsiento))
    );

    return (
        <>
            <Navbar_Contador onNavClick={fetchAsientos} />
            <main className='Main-Contador'>
                <section className='Contenedor-Revision-Asientos'>
                    <div className='buscador'> <h3> Buscador </h3>
                        <input 
                            type='date' 
                            value={searchFecha} 
                            onChange={(e) => setSearchFecha(e.target.value)} 
                            placeholder='Buscar por fecha' 
                        />
                        <input 
                            type='number' 
                            value={searchAsiento} 
                            onChange={(e) => setSearchAsiento(e.target.value)} 
                            placeholder='Buscar Nro de Asiento' 
                        />
                    </div>
                    {loading ? (
                        <p>Cargando asientos...</p>
                    ) : filteredAsientos.length > 0 ? (
                        <>
                            {notification && <div className="notification">{notification}</div>}
                            <table className='Tabla-Revision-Asientos'>
                                <thead className='Cabecera-Tabla-Revision-Asientos'>
                                    <tr className='Tr-Tabla-Revision-Asientos'>
                                        <th>N° Asiento</th>
                                        <th>Fecha</th>
                                        <th>Descripción</th>
                                        <th>Cuenta debitada</th>
                                        <th>Debe</th>
                                        <th>Cuenta acreditada</th>
                                        <th>Haber</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAsientos.map(asiento => (
                                        <tr className='Tr-Tabla-Revision-Asientos' key={asiento.ID_asiento}>
                                            <td>{asiento.ID_asiento}</td>
                                            <td>{asiento.fecha}</td>
                                            <td>{asiento.descripcion}</td>
                                            <td>
                                                {asiento.debe.map((debe, index) => (
                                                    <p key={index}>{debe.nombre_cuenta}</p>
                                                ))}
                                            </td>
                                            <td className={asiento.tieneDiferencia ? 'resaltar-diferencia' : ''}>
                                                {asiento.debe.map((debe, index) => (
                                                    <p key={index}>${debe.monto}</p>
                                                ))}
                                            </td>
                                            <td>
                                                {asiento.haber.map((haber, index) => (
                                                    <p key={index}>{haber.nombre_cuenta}</p>
                                                ))}
                                            </td>
                                            <td className={asiento.tieneDiferencia ? 'resaltar-diferencia' : ''}>
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