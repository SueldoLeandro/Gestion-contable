import React, { useEffect, useState } from 'react';

function PatrimonioNeto() {
    const [patrimonio, setPatrimonio] = useState(null);

    useEffect(() => {
        const fetchPatrimonio = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/calcularBalances');
                const data = await response.json();
                setPatrimonio(data.patrimonio);
            } catch (error) {
                console.error('Error al obtener el patrimonio neto:', error);
            }
        };

        fetchPatrimonio();
    }, []);

    return (
        <table className='Tabla-Patrimonio-Neto'>
            <thead className='Cabecera-Tabla-Patrimonio-Neto'>
                <tr className='Tr-Tabla-Patrimonio-Neto'>
                    <th className='Th-Tabla-Patrimonio-Neto'>Patrimonio Neto</th>
                    <th className='Th-Tabla-Patrimonio-Neto'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Patrimonio-Neto'>
                    <td className='Td-Tabla-Patrimonio-Neto'>Total patrimonio neto</td>
                    <td className='Td-Tabla-Patrimonio-Neto'>
                        {patrimonio !== null && patrimonio !== undefined ? `$ ${patrimonio.toFixed(2)}` : 'Cargando...'}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default PatrimonioNeto;
