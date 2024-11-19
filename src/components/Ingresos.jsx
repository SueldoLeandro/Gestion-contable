import React from 'react';

function Ingresos({ resultados }) {
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
                    <td className='Td-Tabla-Ingresos'>${(resultados.ingresos * 0.6).toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos'>
                    <td className='Td-Tabla-Ingresos'>Servicios prestados</td>
                    <td className='Td-Tabla-Ingresos'>${(resultados.ingresos * 0.3).toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos'>
                    <td className='Td-Tabla-Ingresos'>Otros ingresos</td>
                    <td className='Td-Tabla-Ingresos'>${(resultados.ingresos * 0.1).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Ingresos;
