import React, { useEffect, useState } from 'react';

function Activo() {
    const [activos, setActivos] = useState(null);

    useEffect(() => {
        const fetchActivos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/calcularBalances');
                const data = await response.json();
                setActivos(data.activos);
            } catch (error) {
                console.error('Error al obtener los activos:', error);
            }
        };

        fetchActivos();
    }, []);

    return (
        <table className='Tabla-Info'>
            <thead className='Cabecera-Tabla-Activo'>
                <tr className='Tr-Tabla-Activo'>
                    <th className='Th-Tabla-Activo'>Activos</th>
                    <th className='Th-Tabla-Activo'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Tr-Tabla-Activo'>
                    <td className='Td-Tabla-Activo'>Total Activos</td>
                    <td className='Td-Tabla-Activo'>
                        {activos !== null && activos !== undefined ? `$ ${(activos).toFixed(2)}` : 'Cargando...'}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Activo;
