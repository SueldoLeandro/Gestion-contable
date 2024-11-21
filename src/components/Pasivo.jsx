import React, { useEffect, useState } from 'react';

function Pasivo() {
    const [pasivos, setPasivos] = useState(null);

    useEffect(() => {
        const fetchPasivos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/calcularBalances');
                const data = await response.json();
                setPasivos(data.pasivos);
            } catch (error) {
                console.error('Error al obtener los pasivos:', error);
            }
        };

        fetchPasivos();
    }, []);

    return (
        <table className='Tabla-Info'>
            <thead className='Cabecera-Tabla-Pasivo'>
                <tr className='Tr-Tabla-Pasivo'>
                    <th className='Th-Tabla-Pasivo'>Pasivos</th>
                    <th className='Th-Tabla-Pasivo'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Pasivo'>
                    <td className='Td-Tabla-Pasivo'>Total Pasivos</td>
                    <td className='Td-Tabla-Pasivo'>
                        {pasivos !== null && pasivos !== undefined ? `$ ${(-1*pasivos).toFixed(2)}` : 'Cargando...'}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Pasivo;
