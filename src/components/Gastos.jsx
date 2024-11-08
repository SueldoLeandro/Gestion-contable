import React from 'react';

function Gastos() {
    return (
<table className='Tabla-Gastos'>
                    <thead className='Cabecera-Tabla-Gastos'>
                        <tr className='Tr-Tabla-Gastos'>
                            <th className='Th-Tabla-Gastos'>Tipo de Gasto</th>
                            <th className='Th-Tabla-Gastos'>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Tr-Tabla-Gastos'>
                            <td className='Td-Tabla-Gastos'>Costo de bienes vendidos</td>
                            <td className='Td-Tabla-Gastos'>$ 40.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Gastos'>
                            <td className='Td-Tabla-Gastos'>Sueldos y salarios</td>
                            <td className='Td-Tabla-Gastos'>$ 20.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Gastos'>
                            <td className='Td-Tabla-Gastos'>Gastos operativos</td>
                            <td className='Td-Tabla-Gastos'>$ 5.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Gastos'>
                            <td className='Td-Tabla-Gastos'>Otros gastos</td>
                            <td className='Td-Tabla-Gastos'>$ 5.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Gastos'>
                            <td className='Td-Tabla-Gastos'>Total gastos</td>
                            <td className='Td-Tabla-Gastos'>$ 70.000</td>
                        </tr>
                    </tbody>
                </table>
    );
}

export default Gastos;