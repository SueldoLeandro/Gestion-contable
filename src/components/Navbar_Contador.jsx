import React from 'react';

function Navbar_Contador({ onNavClick }) {
    return (
        <header className='Header-Contador'>
            <h1 className='H1-Contador'>Contador</h1>
            <nav className='Navbar-Contador'>
                <ul className='Ul-Contador'>
                    <li className='Li-Contador'>
                        <a href="./Revision-De-Asientos" className='A-Contador' onClick={onNavClick}>Revisión de asientos</a>
                    </li>

                    <li className='Li-Contador'>
                        <a href="./Informacion" className='A-Contador'>Información:Activo/Pasivo/Patrimonio neto</a>
                    </li>

                    <li className='Li-Contador'>
                        <a href="./Resumen-Financiero" className='A-Contador'>Resumen financiero</a>
                    </li>

                    <li className='Li-Contador'>
                        <a href="/" className='A-Contador'>Cerrar sesión</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar_Contador;