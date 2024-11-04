import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [pagina, setPagina] = useState('');
  const navigate = useNavigate(); // Usando useNavigate

  const handlePageChange = (page) => {
    setPagina(page);
    navigate(page); // Navegando para a nova página
  };

  return (
    <div>
      <div className="alinhamento_navbar">
        <nav className="nav_bar">
          <button onClick={() => handlePageChange('/')}><img src="Logo_SA.png" alt="Logo SA" /></button>
          <button onClick={() => handlePageChange('/MarcarConsulta')}>MARCAR CONSULTA</button>
          <button onClick={() => handlePageChange('/agendamentos')}>AGENDAMENTOS</button>
          <button onClick={() => handlePageChange('/SobreNós')}>SOBRE NÓS</button>
          <button onClick={() => handlePageChange('/blog')}>BLOG</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;