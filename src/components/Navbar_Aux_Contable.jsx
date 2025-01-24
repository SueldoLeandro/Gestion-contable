import React, { useState, useRef, useEffect } from 'react';

function Navbar_Aux_Contable() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='Header-Aux-Contable'>
            <nav className='Navbar-Aux-Contable'>
                <ul className='Ul-Aux-Contable'>
                    <li className='Li-Aux-Contable'>
                        <a href="Carga-De-Asientos" className='A-Aux-Contable'>Cargar asiento</a>
                    </li>
                </ul>
            </nav>
            <div className="Aux-Icon" onClick={toggleMenu} ref={menuRef}>
                <img src="/images/icono-aux.jpg" alt="Usuario" className="Aux-Img" />
                {isMenuOpen && (
                    <div className="Dropdown-Menu">
                        <a href="/" className="Logout-Button">Cerrar sesión</a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar_Aux_Contable;
