import React from 'react';

function Navbar_Aux_Contable() {
    return (
        <header className='Header-Aux-Contable'>
            <h1 className='H1-Aux-Contable'>Auxiliar Contable</h1>
            <nav className='Navbar-Aux-Contable'>
                <ul className='Ul-Aux-Contable'>
                    <li className='Li-Aux-Contable'>
                        <a href="Carga-De-Asientos" className='A-Aux-Contador'>Cargar asiento</a>
                        <a href="/" className='A-Aux-Contador'>Cerrar sesión</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar_Aux_Contable;