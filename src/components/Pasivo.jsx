import React from 'react';

function Pasivo() {
    return (
        <table className='Tabla-Pasivo'>
            <thead className='Cabecera-Tabla-Pasivo'>
                <tr className='Tr-Tabla-Pasivo'>
                    <th className='Th-Tabla-Pasivo'>Pasivos</th>
                    <th className='Th-Tabla-Pasivo'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Pasivo'>
                    <th className='Th-Tabla-Pasivo'>Pasivo Corriente</th>
                </tr>
                <tr className='Tr-Tabla-Pasivo'>
                    <td className='Td-Tabla-Pasivo'>Cuentas por pagar</td>
                    <td className='Td-Tabla-Pasivo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Pasivo'>
                    <td className='Td-Tabla-Pasivo'>Préstamos a corto plazo</td>
                    <td className='Td-Tabla-Pasivo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Pasivo'>
                    <th className='Th-Tabla-Pasivo'>Pasivos No Corriente</th>
                </tr>
                <tr className='Tr-Tabla-Pasivo'>
                    <td className='Td-Tabla-Pasivo'>Préstamos a largo plazo</td>
                    <td className='Td-Tabla-Pasivo'>$ xx.xxx</td>
                </tr>
                <tr className='Tr-Tabla-Pasivo'>
                    <td className='Td-Tabla-Pasivo'>Total pasivos</td>
                    <td className='Td-Tabla-Pasivo'>$ xx.xxx</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pasivo;