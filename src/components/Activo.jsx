import React from 'react';

function Activo() {
    return (
        <table className='Tabla-Activo'>
            <thead className='Cabecera-Tabla-Activo'>
                <tr className='Tr-Tabla-Activo'>
                    <th className='Th-Tabla-Activo'>Activos</th>
                    <th className='Th-Tabla-Activo'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Activo'>
                    <th className='Th-Tabla-Activo'>Activo Corriente</th>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Efectivo y equivalentes</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Cuentas por cobrar</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Inventarios</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <th className='Th-Tabla-Activo'>Activos No Corriente</th>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Propiedades, planta y equipo</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>inversiones a largo plazo</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Total Activos</td>
                    <td className='Td-Tabla-Activo'>$ xx.xxx</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Activo;