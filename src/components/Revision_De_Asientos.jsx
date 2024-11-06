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

export default Revision_De_Asientos;