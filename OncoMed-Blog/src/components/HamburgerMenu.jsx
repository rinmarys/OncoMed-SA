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
                        <li><Link to='' className='Link-decoration'>Home</Link></li>
                        <li><Link to='' className='Link-decoration'>Marcar consulta</Link></li>
                        <li><Link to='' className='Link-decoration'>Agendamentos</Link></li>
                        <li><Link to='' className='Link-decoration'>Blog</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;