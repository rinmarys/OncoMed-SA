import React from 'react'
import HamburguerMenu from '../components/HamburgerMenu'
import CalendarioMeusAgendamentos from '../components/CalendarioMeusAgendamentos'
import './MeusAgendamentos.css'
function MeusAgendamentos() {

  return (
    <div className='tudo-MeusAgendamentos'>

      <div className="alinhamento-hamburger">
        <HamburguerMenu />
      </div>

      <div className="container-conteudo-meusAgendamentos">
        <div className="alinhamento-texto-mascote-meusAgendamentos">
          <h1>Confira suas próximas consultas e mantenha o cuidado em dia!</h1>
          <img src="JadeMascoteFeliz.png" alt="Jade o mascote felizz" />
        </div>

        <div className="alinhar-meusagendamentos">
          <div className="calendario">
            <CalendarioMeusAgendamentos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeusAgendamentos
