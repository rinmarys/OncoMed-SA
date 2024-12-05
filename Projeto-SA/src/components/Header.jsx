import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/Header.css'
import { GlobalContext } from '../contexts/GlobalContext'

function Header() {

<<<<<<< HEAD
  const {usuario_logado} = useContext(GlobalContext);

=======
  const {usuario_logado, set_usuario_logado} = useContext(GlobalContext);
>>>>>>> 4202c8deaebb3ecb12e405cbfd627c6acb22dd68
  const [imagem_de_perfil_do_header, set_imagem_de_perfil_do_header] = useState(`Imagem de Perfil (Default).svg`);
  const navegacao_de_pagina = useNavigate(``);

  useEffect(() => {

  if(usuario_logado && usuario_logado.imagem_de_perfil_do_header){
    set_imagem_de_perfil_do_header(usuario_logado.imagem_de_perfil_do_header)

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
<<<<<<< HEAD
            <Link to={'/marcarConsulta'} className='nav_bar_link'>MARCAR CONSULTA</Link>
            <Link to={'/meusAgendamentos'} className='nav_bar_link'>AGENDAMENTOS</Link>
            <Link to={'/blog'} className='nav_bar_link'>BLOG</Link>
            <Link to={'/historicoConsultas'} className='nav_bar_link'>HISTÓRICO DE CONSULTAS</Link>

            {/* Rotas para ir nas telas de perfis */}
            {usuario_logado.id_paiente && (<Link to={'/perfil_paciente'}><img src={imagem_de_perfil_do_header} alt="perfil de usuario" />
            </Link>)}
            {usuario_logado.id_medico && (<Link to={'/perfil_medico'}><img src={imagem_de_perfil_do_header} alt="perfil de usuario" />
            </Link>)}
           
=======
            <button onClick={() => usuario_logado.length == 0 ? alert(`asdasdadd`) : navegacao_de_pagina(`/marcarConsulta`)} className='nav_bar_link'>MARCAR CONSULTA</button>
            <button onClick={() => usuario_logado.length == 0 ? alert(`123123`) : navegacao_de_pagina(`/meusAgendamentos`)}className='nav_bar_link'>AGENDAMENTOS</button>
            <button onClick={() => usuario_logado.length == 0 ? alert(`234255245`) : navegacao_de_pagina(`/blog`)} className='nav_bar_link'>BLOG</button>
            <button onClick={() => usuario_logado.length == 0 ? alert(`2131233123123123`) : navegacao_de_pagina('/historicoConsultas')} className='nav_bar_link'>HISTÓRICO DE CONSULTAS</button>
            <button onClick={() => usuario_logado.length == 0 ? alert(`zzzzzzz`) : navegacao_de_pagina(`/perfilPaciente`)} className='nav_bar_link_perfil'><img src={imagem_de_perfil_do_header} alt="perfil de usuario" /></button>
>>>>>>> 4202c8deaebb3ecb12e405cbfd627c6acb22dd68
        </nav>

        </div>

    </div>
  )
}

export default Header
