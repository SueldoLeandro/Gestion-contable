import React from 'react';

function PatrimonioNeto() {
    return (
<table className='Tabla-Info'>
                    <thead className='Cabecera-Tabla-Patrimonio-Neto'>
                        <tr className='Tr-Tabla-Patrimonio-Neto'>
                            <th className='Th-Tabla-Patrimonio-Neto'>Patrimonio Neto</th>
                            <th className='Th-Tabla-Patrimonio-Neto'>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Tr-Tabla-Patrimonio-Neto'>
                            <td className='Td-Tabla-Patrimonio-Neto'>Capital social</td>
                            <td className='Td-Tabla-Patrimonio-Neto'>$ xx.xxx</td>
                        </tr>
                        <tr className='Tr-Tabla-Patrimonio-Neto'>
                            <td className='Td-Tabla-Patrimonio-Neto'>Reservas</td>
                            <td className='Td-Tabla-Patrimonio-Neto'>$ xx.xxx</td>
                        </tr>
                        <tr className='Tr-Tabla-Patrimonio-Neto'>
                            <td className='Td-Tabla-Patrimonio-Neto'>Resultados acumulados</td>
                            <td className='Td-Tabla-Patrimonio-Neto'>$ xx.xxx</td>
                        </tr>
                        <tr className='Tr-Tabla-Patrimonio-Neto'>
                            <td className='Td-Tabla-Patrimonio-Neto'>Total patrimonio neto</td>
                            <td className='Td-Tabla-Patrimonio-Neto'>$ xx.xxx</td>
                        </tr>
                    </tbody>
                </table>
    );
}

export default PatrimonioNeto;