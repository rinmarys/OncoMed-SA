import { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { GlobalContext } from '../contexts/GlobalContext'

function Header() {

  const {usuario_logado, set_usuario_logado} = useContext(GlobalContext);

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
            <Link to={'/perfil_paciente'} className='nav_bar_link_perfil'><img src={usuario_logado} alt="perfil de usuario" /></Link>
        </nav>

        </div>

    </div>
  )
}

export default Header
