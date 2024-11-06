import React from 'react';

function Flujo_De_Caja() {
    return (
        <table className='Tabla-Flujo-De-Caja'>
            <thead className='Cabecera-Tabla-Flujo-De-Caja'>
                <tr className='Tr-Tabla-Flujo-De-Caja'>
                    <th className='Th-Tabla-Flujo-De-Caja'>Tipo de flujo</th>
                    <th className='Th-Tabla-Flujo-De-Caja'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Flujo-De-Caja'>
                    <td className='Td-Tabla-Flujo-De-Caja'>Flujo de caja operativo</td>
                    <td className='Td-Tabla-Flujo-De-Caja'>$ 20.000</td>
                </tr>
                <tr className='Tr-Tabla-Flujo-De-Caja'>
                    <td className='Td-Tabla-Flujo-De-Caja'>Flujo de caja de inversión</td>
                    <td className='Td-Tabla-Flujo-De-Caja'>-$ 10.000</td>
                </tr>
                <tr className='Tr-Tabla-Flujo-De-Caja'>
                    <td className='Td-Tabla-Flujo-De-Caja'>Flujo de caja financiero</td>
                    <td className='Td-Tabla-Flujo-De-Caja'>$ 15.000</td>
                </tr>
                <tr className='Tr-Tabla-Flujo-De-Caja'>
                    <td className='Td-Tabla-Flujo-De-Caja'>Total flujo de caja</td>
                    <td className='Td-Tabla-Flujo-De-Caja'>$ 25.000</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Flujo_De_Caja;