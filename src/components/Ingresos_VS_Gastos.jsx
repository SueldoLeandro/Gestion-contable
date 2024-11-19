{/*import React from 'react';

function Ingresos_VS_Gastos({ resultados }) {
    return (

        <table className='Tabla-Ingresos-VS-Gastos'>
            <thead className='Cabecera-Tabla-Ingresos-VS-Gastos'>
                <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                    <th className='Th-Tabla-Ingresos-VS-Gastos'>Concepto</th>
                    <th className='Th-Tabla-Ingresos-VS-Gastos'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>Ingresos</td>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>${resultados.ingresos.toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>Gastos</td>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>${resultados.gastos.toLocaleString()}</td>
                </tr>
                <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>Beneficio neto</td>
                    <td className='Td-Tabla-Ingresos-VS-Gastos'>${resultados.beneficioNeto.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
*/}
import React from 'react';

function Ingresos_VS_Gastos({ resultados }) {
    return (
<table className='Tabla-Info'>
                    <thead className='Cabecera-Tabla-Ingresos-VS-Gastos'>
                        <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                            <th className='Th-Tabla-Ingresos-VS-Gastos'>Concepto</th>
                            <th className='Th-Tabla-Ingresos-VS-Gastos'>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>Ingresos</td>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>$ 100.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>Gastos</td>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>$ 70.000</td>
                        </tr>
                        <tr className='Tr-Tabla-Ingresos-VS-Gastos'>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>Beneficio neto</td>
                            <td className='Td-Tabla-Ingresos-VS-Gastos'>$ 30.000</td>
                        </tr>
                    </tbody>
                </table>
    );
}

export default Ingresos_VS_Gastos;
