import React, { useState, useEffect, useRef } from 'react';
import './HamburgerMenu.css';
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="hamburger-container" ref={menuRef}>
            <div className="hamburger" onClick={toggleMenu}>
                <img
                    src={isOpen ? 'Logo_SA.png' : 'Logo_SA.png'}
                    alt="Menu"
                    className="menu-icon"
                />
            </div>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        {/* CSS de alinhamento no hamburger do admin */}
                        <div className='alinhamento-icons-hamburger'>
                            <img src="home-icon.png" alt="home" className='alinhamento-img-hamburger' /><li><Link to='/' className='Link-decoration'>Home</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="marcar-consulta-icon.png" alt="marcar cnsulta" className='alinhamento-img-hamburger' /><li><Link to='/marcarConsulta' className='Link-decoration'>Marcar consulta</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="agendamentos-icon.png" alt="agendamentos" className='alinhamento-img-hamburger' /><li><Link to='/meusAgendamentos' className='Link-decoration'>Agendamentos</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="blog-icon.png" alt="blog" className='alinhamento-img-hamburger' /><li><Link to='/blogInicioAdmin' className='Link-decoration'>Blog</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="meu-perfil-icon.png" alt="meu perfil" className='alinhamento-img-hamburger' /><li><Link to='/perfil_paciente' className='Link-decoration'>Meu perfil</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="sobre-nos-icon.png" alt="sobre nos" className='alinhamento-img-hamburger' /><li><Link to='/sobreNos' className='Link-decoration'>Sobre nós</Link></li>
                        </div>
                        {/* CSS de alinhamento no hamburger do admin */}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;