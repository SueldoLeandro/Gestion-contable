import React from 'react';

function Ingresos() {
    return (
<table className='Tabla-Ingresos'>
                    <thead className='Cabecera-Tabla-Ingresos'>
                        <tr className='Tr-Tabla-Ingresos'>
                            <th className='Th-Tabla-Ingresos'>Fuente de Ingreso</th>
                            <th className='Th-Tabla-Ingresos'>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Tr-Tabla-Ingresos'>
                            <td className='Td-Tabla-Ingresos'>Ventas de productos</td>
                            <td className='Td-Tabla-Ingresos'>$ 60.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Ingresos'>
                            <td className='Td-Tabla-Ingresos'>Servicios prestados</td>
                            <td className='Td-Tabla-Ingresos'>$ 30.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Ingresos'>
                            <td className='Td-Tabla-Ingresos'>Otros ingresos</td>
                            <td className='Td-Tabla-Ingresos'>$ 10.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Ingresos'>
                            <td className='Td-Tabla-Ingresos'>Total ingresos</td>
                            <td className='Td-Tabla-Ingresos'>$ 100.000</td>
                        </tr>
                    </tbody>
                </table>
    );
}

export default Ingresos;