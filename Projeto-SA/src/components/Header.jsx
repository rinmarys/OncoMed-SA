import { Link } from 'react-router-dom'
import '../components/Header.css'

function Header() {
  return (
    <div>
        {/* Nav Bar Home Page  */}

        <div className="alinhamento_navbar">

        <nav className="nav_bar">


            <Link to={'/'} className='nav_bar_link'><img src="Logo_SA.png" alt="Logo SA"/></Link>
            <Link to={'/marcarConsulta'} className='nav_bar_link'>MARCAR CONSULTA</Link>
            <Link to={'/agendamentos'} className='nav_bar_link'>AGENDAMENTOS</Link>
            <Link to={'/sobrenos'} className='nav_bar_link'>SOBRE NÓS</Link>
            <Link to={'/blog'} className='nav_bar_link'>BLOG</Link>
        </nav>

        </div>

    </div>
  )
}

export default Header
