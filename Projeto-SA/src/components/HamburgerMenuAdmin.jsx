import React, { useState, useEffect, useRef } from 'react';
import './HamburgerMenuAdmin.css';
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
        <div className="hamburger-container-admin" ref={menuRef}>
            <div className="hamburger" onClick={toggleMenu}>
                <img
                    src={isOpen ? 'Logo_SA.png' : 'Logo_SA.png'}
                    alt="Menu"
                    className="menu-icon"
                />
            </div>
            {isOpen && (
                <nav className="menuAdmin">
                    <ul>
                        <li><Link to='/espacoDeControleAdmin' className='Link-decoration'>Espaço de controle</Link></li>
                        <li><Link to='/blogInicioAdmin' className='Link-decoration'>Blog</Link></li>
                        <li><Link to='/solicitacaoConsulta' className='Link-decoration'>Solicitações</Link></li>
                        <li><Link to='/sobreNos' className='Link-decoration'>Sobre nós</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;