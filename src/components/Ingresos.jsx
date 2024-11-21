import React from 'react';

function Ingresos({ resultados }) {
    return (
        <table className='Tabla-Info'>
            <thead className='Cabecera-Tabla-Ingresos'>
                <tr className='Tr-Tabla-Ingresos'>
                    <th className='Th-Tabla-Ingresos'>Fuente de Ingreso</th>
                    <th className='Th-Tabla-Ingresos'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Ingresos'>
                    <td className='Td-Tabla-Ingresos'>Ventas de productos</td>
                    <td className='Td-Tabla-Ingresos'>${(resultados.ventaProductos).toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos'>
                    <td className='Td-Tabla-Ingresos'>Servicios prestados</td>
                    <td className='Td-Tabla-Ingresos'>${(resultados.serviciosPrestados).toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos'>
                    <td className='Td-Tabla-Ingresos'>Otros ingresos</td>
                    <td className='Td-Tabla-Ingresos'>${(resultados.otrosIngresos).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Ingresos;
