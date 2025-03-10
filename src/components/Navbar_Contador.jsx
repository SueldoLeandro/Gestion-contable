import React, { useState, useEffect, useRef } from 'react';

function Navbar_Contador({ onNavClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className='Header-Contador'>
            <nav className='Navbar-Contador'>
                <ul className='Ul-Contador'>
                    <li className='Li-Contador'>
                        <a href="./Revision-De-Asientos" className='A-Contador' onClick={onNavClick}>Revisión de asientos</a>
                    </li>
                    <li className='Li-Contador'>
                        <a href="./Informacion" className='A-Contador'>Información</a>
                    </li>
                    <li className='Li-Contador'>
                        <a href="./Resumen-Financiero" className='A-Contador'>Resumen financiero</a>
                    </li>
                    <li className='Li-Contador'>
                        <a href="./registro" className='A-Contador'>Registro</a>
                    </li>
                    <li className='Li-Contador'>
                        <a href="./Modificar-Usuarios" className='A-Contador'>Modificar Usuarios</a>
                    </li>
                </ul>
            </nav>
            <div className="User-Icon" onClick={toggleMenu} ref={menuRef}>
                <img src="/images/icono-contador.jpg" alt="Usuario" className="User-Img" />
                {isMenuOpen && (
                    <div className="Dropdown-Menu">
                        <a href="/" className="Logout-Button">Cerrar sesión</a>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar_Contador;
