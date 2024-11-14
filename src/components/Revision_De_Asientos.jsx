/*
import React from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Revision_De_Asientos() {
    return (
        <>
        <Navbar_Contador/>
        <main className='Main-Contador'>
            <section className='Contenedor-Revision-Asientos'>
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
                        <tr className='Tr-Tabla-Revision-Asientos'>
                            <td className='Td-Tabla-Revision-Asientos'>1</td>
                            <td className='Td-Tabla-Revision-Asientos'>01/01/2024</td>
                            <td className='Td-Tabla-Revision-Asientos'>Compra de inventarios</td>
                            <td className='Td-Tabla-Revision-Asientos'>inventarios</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 5.000</td>
                            <td className='Td-Tabla-Revision-Asientos'>Banco</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 5.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Revision-Asientos'>
                            <td className='Td-Tabla-Revision-Asientos'>2</td>
                            <td className='Td-Tabla-Revision-Asientos'>02/01/2024</td>
                            <td className='Td-Tabla-Revision-Asientos'>Venta de mercaderías</td>
                            <td className='Td-Tabla-Revision-Asientos'>Banco</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 7.000</td>
                            <td className='Td-Tabla-Revision-Asientos'>Ventas</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 7.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Revision-Asientos'>
                            <td className='Td-Tabla-Revision-Asientos'>3</td>
                            <td className='Td-Tabla-Revision-Asientos'>03/01/2024</td>
                            <td className='Td-Tabla-Revision-Asientos'>Pago de salarios</td>
                            <td className='Td-Tabla-Revision-Asientos'>Gasto de salarios</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 3.000</td>
                            <td className='Td-Tabla-Revision-Asientos'>Banco</td>
                            <td className='Td-Tabla-Revision-Asientos'>$ 3.000</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </main>
        <Footer/>
        </>
    );
}

export default Revision_De_Asientos;*/
/*
import React, { useState, useEffect } from 'react';
import Navbar_Contador from './Navbar_Contador';
import Footer from './Footer';

function Revision_De_Asientos() {
    const [asientos, setAsientos] = useState([]);

    // Función para obtener los asientos desde la base de datos
    const fetchAsientos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/asientos');

            if (!response.ok) {
                throw new Error('Error en la solicitud al servidor');
            }

            const data = await response.json();
            setAsientos(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error al cargar los asientos:", error);
            setAsientos([]);
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
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Revision_De_Asientos;
*/


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
            console.log('holaaaaaaa:',data)
            setAsientos(Array.isArray(data) ? data : []);
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
                                            {asiento.debe?.map((debe, index) => (
                                                <p key={index}>{debe.nombre_cuenta}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.debe?.map((debe, index) => (
                                                <p key={index}>${debe.monto}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.haber?.map((haber, index) => (
                                                <p key={index}>{haber.nombre_cuenta}</p>
                                            ))}
                                        </td>
                                        <td className='Td-Tabla-Revision-Asientos'>
                                            {asiento.haber?.map((haber, index) => (
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
