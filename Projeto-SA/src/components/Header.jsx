import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/Header.css'
import { GlobalContext } from '../contexts/GlobalContext'
import Pop_up_de_login from './Pop_up_de_login';

function Header() {

  const {usuario_logado, set_usuario_logado} = useContext(GlobalContext);
  const [imagem_de_perfil_do_header, set_imagem_de_perfil_do_header] = useState(`Imagem de Perfil (Default).svg`);
  const {pop_up_de_login, set_pop_up_de_login} = useContext(GlobalContext);
  const navegacao_de_pagina = useNavigate(``);

  useEffect(() => {

  if(usuario_logado.length != 0){
    set_imagem_de_perfil_do_header(usuario_logado.imagem_de_perfil)

  }else{
    set_imagem_de_perfil_do_header('Imagem de Perfil (Default).svg')
  }
  } , [usuario_logado]);

  return (
    <div>
      
        {/* Nav Bar Home Page  */}

        <div className="alinhamento_navbar">

        <nav className="nav_bar">

            <div className='dv_imagem_logo'>
              
              <Link to={'/'} className='nav_bar_link_logo'><img src="Logo_SA.png" alt="Logo SA"/></Link>
            
            </div>
            <Link to={'/marcarConsulta'} className='nav_bar_link'>MARCAR CONSULTA</Link>
            <Link to={'/meusAgendamentos'} className='nav_bar_link'>AGENDAMENTOS</Link>
            <Link to={'/blog'} className='nav_bar_link'>BLOG</Link>
            <Link to={'/historicoConsultas'} className='nav_bar_link'>HISTÓRICO DE CONSULTAS</Link>

            {/* Rotas para ir nas telas de perfis */}
           
            {usuario_logado.id_paiente && (<Link to={'/perfil_paciente'}><img src={imagem_de_perfil_do_header} alt="perfil de usuario" />
            </Link>)}
            {usuario_logado.id_medico && (<Link to={'/perfil_medico'}><img src={imagem_de_perfil_do_header} alt="perfil de usuario" />
            </Link>)}
           
        </nav>

        </div>

        {pop_up_de_login && <Pop_up_de_login/>}

    </div>
  )
}

export default Header
