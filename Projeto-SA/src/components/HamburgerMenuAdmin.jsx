import React, { useState, useEffect, useRef } from 'react';
import './HamburgerMenuAdmin.css';
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    // const [usuario_administrador, set_usuario_administrador] = useState([{ nome: `Administrador`, email: `administrador@gmail.com`, senha: `1234567` }]);

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
                        <div className='alinhamento-icons-hamburger'>
                            <img src="home-icon.png" alt="home" className='alinhamento-img-hamburger' /> <li><Link to='/espacoDeControleAdmin' className='Link-decoration'>Espaço de controle</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="blog-icon.png" alt="blog" className='alinhamento-img-hamburger' /> <li><Link to='/blogInicioAdmin' className='Link-decoration'>Blog</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="solicitacao-icon.png" alt="solicitações" className='alinhamento-img-hamburger' /><li><Link to='/solicitacaoConsulta' className='Link-decoration'>Solicitações</Link></li>
                        </div>

                        <div className='alinhamento-icons-hamburger'>
                            <img src="sobre-nos-icon.png" alt="sobre nos" className='alinhamento-img-hamburger' /><li><Link to='/sobreNos' className='Link-decoration'>Sobre nós</Link></li>
                        </div>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;

{/* <Link to="https://www.instagram.com/" target='_blank' className='instagram_icon'><img src={instagram_logo} alt="Acessar Instragram" onMouseEnter={() => set_instagram_logo(`Instagram_Hover.png`)} onMouseLeave={() => set_instagram_logo(`Instagram.png`)} /></Link>
<Link to="https://web.whatsapp.com/" target='_blank' className='whatsapp_icon'><img src={whatsapp_logo} alt="Acessar WhatsApp" onMouseEnter={() => set_whatsapp_logo(`Whatsapp_Hover.png`)} onMouseLeave={() => set_whatsapp_logo(`Whatsapp.png`)} /></Link>
<Link to="https://www.google.com/intl/pt-BR/gmail/about/" target='_blank' className='gmail_icon' onMouseEnter={() => set_gmail_logo(`correspondencia_hover.png`)} onMouseLeave={() => set_gmail_logo(`correspondencia.png`)}><img src={gmail_logo} alt="Acessar Gmail" className='gmail-img' /></Link> */}